import { Component, Input } from '@angular/core';

@Component({
  selector: 'drop-down-list',
  templateUrl: './drop-down-list.component.html',
  styleUrls: ['./drop-down-list.component.scss']
})
export class DropDownListComponent {
  @Input() valuesList: Number[];
  constructor() {
    this.valuesList = [5, 10, 20];
  }
}
