import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/IProduct';
import { HttpRequestsService } from 'src/app/services/httpRequests/http-requests.service';

@Component({
  selector: 'app-expandable-menu',
  templateUrl: './expandable-menu.component.html',
  styleUrls: ['./expandable-menu.component.scss']
})
export class ExpandableMenuComponent {
  @Input() product!: IProduct;

  constructor(private router: Router, private http: HttpRequestsService) { }

  protected navigateEditProduct() {
    sessionStorage.setItem("productInfo", JSON.stringify(this.product));
    this.router.navigateByUrl('/ejercicio/formulario');
  }

  protected deleteProduct(id: string, name: string) {
    if (window.confirm('¿Estás seguro de eliminar el producto ' + name + '?')) {
      this.http.deleteProduct(id).subscribe({
        next: (resp: IProduct[]) => {
          window.location.reload();
        },
        error: (error: HttpErrorResponse) => {
          console.error(error.message);
        }
      });
    }
  }
}
