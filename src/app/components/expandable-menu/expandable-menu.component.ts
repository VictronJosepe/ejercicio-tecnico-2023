import { Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/IProduct';

@Component({
  selector: 'app-expandable-menu',
  templateUrl: './expandable-menu.component.html',
  styleUrls: ['./expandable-menu.component.scss']
})
export class ExpandableMenuComponent {
  @Input() product!: IProduct;

  constructor(private router: Router) { }

  protected navigateEditProduct() {
    sessionStorage.setItem("productInfo", JSON.stringify(this.product));
    this.router.navigateByUrl('/ejercicio/formulario');
  }

  protected deleteProduct(id: string) {
    console.log("id", id);
    // this.router.navigateByUrl('/ejercicio/products');
  }
}
