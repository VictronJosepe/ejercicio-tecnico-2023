import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { GridComponent } from 'src/app/components/grid/grid.component'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @ViewChild(GridComponent) private gridComponent!: GridComponent;

  constructor(private router: Router) { }

  ngOnInit() {
    this.searchForm.setValue({
      searchBox: ""
    });
    this.onChanges();
  }

  protected navigateCreateProduct() {
    sessionStorage.clear();
    this.router.navigateByUrl('/ejercicio/formulario');
  }

  searchForm = new FormGroup({
    searchBox: new FormControl("", []),
  });

  onChanges() {
    this.searchForm.get('searchBox')!.valueChanges.subscribe(val => {
      this.gridComponent.searchByBox(val || "");
    });
  }
}
