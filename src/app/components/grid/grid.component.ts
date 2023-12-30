import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
    sessionStorage.clear();
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

  protected updateProductListQuantity(quantity: any) {
    let quantityNumber = Number(quantity);
    if (this.productListServer && !isNaN(quantityNumber)) {
      this.productListSliced = this.productListServer.slice(0, quantityNumber);
    }
  }

  protected formatDate(dateType: "date_release" | "date_revision", index: number): Date {
    let tempDate = this.productListSliced![index][dateType];
    if (typeof tempDate === "string") {
      this.productListSliced![index][dateType] = new Date(tempDate.slice(0, tempDate.indexOf("+")));
    }
    return this.productListSliced![index][dateType] as Date;
  }
}
