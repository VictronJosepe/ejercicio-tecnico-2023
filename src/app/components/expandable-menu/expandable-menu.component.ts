import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/IProduct';
import { DialogService } from 'src/app/services/dialogService/dialog.service';


@Component({
  selector: 'app-expandable-menu',
  templateUrl: './expandable-menu.component.html',
  styleUrls: ['./expandable-menu.component.scss']
})
export class ExpandableMenuComponent {
  @Input() product!: IProduct;

  constructor(private router: Router, protected dialogService: DialogService) { }

  protected navigateEditProduct() {
    sessionStorage.setItem("productInfo", JSON.stringify(this.product));
    this.router.navigateByUrl('/ejercicio/formulario');
  }

  protected deleteProduct(id: string, name: string) {
    this.dialogService.id = id;
    this.dialogService.name = name;
    this.dialogService.showDialog = true;
  }
}
