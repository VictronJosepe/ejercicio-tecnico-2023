import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { IProduct } from 'src/app/interfaces/IProduct';
import { CustomValidationService } from 'src/app/services/customValidation/custom-validation.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  protected isFormValid = false;

  constructor(private router: Router, private customValidator: CustomValidationService) { }

  ngOnInit() {
    let productInfo = sessionStorage.getItem("productInfo");
    if (productInfo) {
      let respObj: IProduct = JSON.parse(productInfo);

      this.productForm.setValue({
        id: respObj.id,
        name: respObj.name,
        description: respObj.description,
        logo: respObj.logo,
        releaseDate: new Date(respObj.date_release).toISOString().split('T')[0],
        revisionDate: new Date(respObj.date_revision).toISOString().split('T')[0]
      });

      this.productForm.get('id')?.disable();
    } else {
      this.productForm.get('id')?.addAsyncValidators([this.customValidator.notExistInServer()]);
    }
    this.productForm.get('revisionDate')?.disable();
    this.isFormValid = false;
    this.onChanges();
  }

  protected saveChanges() {
    debugger;
  }

  protected cancelChanges() {
    this.router.navigateByUrl('/ejercicio/products');
  }

  productForm = new FormGroup({
    id: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10)
    ]),
    name: new FormControl("", [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(100)
    ]),
    description: new FormControl("", [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(200)
    ]),
    logo: new FormControl("", [
      Validators.required
    ]),
    releaseDate: new FormControl("", [
      Validators.required,
      this.customValidator.dateLaterThanCurrent()
    ]),
    revisionDate: new FormControl("", [
      Validators.required,
      this.customValidator.dateLaterByOneYear()
    ]),
  });

  onSubmit() {
    // this.router.navigateByUrl('/ejercicio/products');
  }

  onChanges(): void {
    this.productForm.valueChanges.subscribe(val => {
      this.isFormValid = this.productForm.valid;
    });

    this.productForm.get('releaseDate')!.valueChanges.subscribe(val => {
      this.productForm.patchValue({
        revisionDate: val
      });
    });
  }

}
