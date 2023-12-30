import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/IProduct';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  protected isNewRegistry: boolean = true;
  protected product: IProduct = {
    date_release: "",
    date_revision: "",
    description: "",
    id: "",
    logo: "",
    name: ""
  };

  constructor(private router: Router) { }

  ngOnInit() {
    let productInfo = sessionStorage.getItem("productInfo");
    if (productInfo) {
      this.product = JSON.parse(productInfo);

      this.product.date_release = new Date(this.product.date_release).toISOString().split('T')[0];
      this.product.date_revision = new Date(this.product.date_revision).toISOString().split('T')[0];

      this.isNewRegistry = false;
    }
  }

  protected saveChanges() {
    this.router.navigateByUrl('/ejercicio/products');
  }

  protected cancelChanges() {
    this.router.navigateByUrl('/ejercicio/products');
  }
}
