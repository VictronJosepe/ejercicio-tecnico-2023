import { Component } from '@angular/core';
import { IGridData } from 'src/app/interfaces/IGridData';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {

  productList: IGridData[] | null = null;

  constructor() {

  }

  ngOnInit() {
    this.productList = [
      {
        id: "001",
        logo: "JG",
        productName: "Nombre del producto",
        description: "Descripción",
        liberationDate: new Date("01/01/2000"),
        reestructurationDate: new Date("01/01/2001")
      },
      {
        id: "002",
        logo: "JG",
        productName: "Nombre del producto",
        description: "Descripción",
        liberationDate: new Date("01/01/2000"),
        reestructurationDate: new Date("01/01/2001")
      },
      {
        id: "003",
        logo: "JG",
        productName: "Nombre del producto",
        description: "Descripción",
        liberationDate: new Date("01/01/2000"),
        reestructurationDate: new Date("01/01/2001")
      },
      {
        id: "004",
        logo: "JG",
        productName: "Nombre del producto",
        description: "Descripción",
        liberationDate: new Date("01/01/2000"),
        reestructurationDate: new Date("01/01/2001")
      },
      {
        id: "005",
        logo: "JG",
        productName: "Nombre del producto",
        description: "Descripción",
        liberationDate: new Date("01/01/2000"),
        reestructurationDate: new Date("01/01/2001")
      }
    ]
  }
}
