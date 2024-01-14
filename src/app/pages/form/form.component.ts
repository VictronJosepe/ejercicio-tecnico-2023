import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { IProduct } from 'src/app/interfaces/IProduct';
import { CustomValidationService } from 'src/app/services/customValidation/custom-validation.service';
import { HttpRequestsService } from 'src/app/services/httpRequests/http-requests.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  protected isFormValid = false;
  private isNewRegistry = true;

  constructor(private router: Router, private customValidator: CustomValidationService, private http: HttpRequestsService) { }

  ngOnInit() {
    let productInfo = sessionStorage.getItem("productInfo");
    if (productInfo) {
      try {
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
        this.isNewRegistry = false;
      } catch (error) {
        console.error(error);
      }
    } else {
      this.productForm.get('id')?.addAsyncValidators([this.customValidator.notExistInServer()]);
      this.isNewRegistry = true;
    }
    this.productForm.get('revisionDate')?.disable();
    this.isFormValid = false;
    this.onChanges();
  }

  protected saveChanges() {
    let obj: IProduct = {
      date_release: this.productForm.get('releaseDate')!.value!,
      date_revision: this.productForm.get('revisionDate')!.value!,
      description: this.productForm.get('description')!.value!,
      id: this.productForm.get('id')!.value!,
      logo: this.productForm.get('logo')!.value!,
      name: this.productForm.get('name')!.value!
    }

    if (this.isNewRegistry) {
      this.http.createProduct(obj).subscribe({
        next: (resp: IProduct) => {
          this.router.navigateByUrl('/ejercicio/products');
        },
        error: (error: HttpErrorResponse) => {
          console.error(error.message);
        }
      });
    } else {
      this.http.updateProduct(obj).subscribe({
        next: (resp: IProduct) => {
          this.router.navigateByUrl('/ejercicio/products');
        },
        error: (error: HttpErrorResponse) => {
          console.error(error.message);
        }
      });
    }

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
