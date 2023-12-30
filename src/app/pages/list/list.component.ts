import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/IProduct';
import { HttpRequestsService } from 'src/app/services/httpRequests/http-requests.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  constructor(private router: Router) { }

  protected navigateCreateProduct() {
    sessionStorage.clear();
    this.router.navigateByUrl('/ejercicio/formulario');
  }
}
