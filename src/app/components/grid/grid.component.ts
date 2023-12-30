import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';

import { IProduct } from 'src/app/interfaces/IProduct';
import { HttpRequestsService } from 'src/app/services/httpRequests/http-requests.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {
  protected productListServer: IProduct[] | null = null;
  protected productListSliced: IProduct[] | null = null;
  protected valuesList = [5, 10, 20];

  constructor(private http: HttpRequestsService) { }

  ngOnInit() {
    this.http.getAllProducts().subscribe({
      next: (resp: IProduct[]) => {
        this.productListServer = resp;
        this.updateProductListQuantity(5);
      },
      error: (error: HttpErrorResponse) => {
        console.error("error22", error.message);
      }
    });
  }

  updateProductListQuantity(quantity: any) {
    let quantityNumber = Number(quantity);
    if (this.productListServer && !isNaN(quantityNumber)) {
      this.productListSliced = this.productListServer.slice(0, quantityNumber);
    }
  }

  formatDate(tempDate: Date | string): Date {
    if (typeof tempDate === "string") {
      return new Date(tempDate.slice(0, tempDate.indexOf("+")));
    } else {
      return tempDate;
    }
  }
}
