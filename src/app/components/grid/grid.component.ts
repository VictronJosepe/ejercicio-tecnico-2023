import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/IProduct';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {

  productList: IProduct[] | null = null;

  constructor() {

  }

  ngOnInit() {
    this.productList = [
      {
        id: "001",
        logo: "JG",
        name: "Nombre del producto",
        description: "Descripción",
        date_release: new Date("01/01/2000"),
        date_revision: new Date("01/01/2001")
      },
      {
        id: "002",
        logo: "JG",
        name: "Nombre del producto",
        description: "Descripción",
        date_release: new Date("01/01/2000"),
        date_revision: new Date("01/01/2001")
      },
      {
        id: "003",
        logo: "JG",
        name: "Nombre del producto",
        description: "Descripción",
        date_release: new Date("01/01/2000"),
        date_revision: new Date("01/01/2001")
      },
      {
        id: "004",
        logo: "JG",
        name: "Nombre del producto",
        description: "Descripción",
        date_release: new Date("01/01/2000"),
        date_revision: new Date("01/01/2001")
      },
      {
        id: "005",
        logo: "JG",
        name: "Nombre del producto",
        description: "Descripción",
        date_release: new Date("01/01/2000"),
        date_revision: new Date("01/01/2001")
      }
    ]
  }
}
