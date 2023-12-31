import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'drop-down-list',
  templateUrl: './drop-down-list.component.html',
  styleUrls: ['./drop-down-list.component.scss']
})
export class DropDownListComponent {
  @Input() valuesList!: any[];

  @Output() changeEvent = new EventEmitter<any>();

  onChangeValue(event: Event) {
    this.changeEvent.emit((event.target! as HTMLSelectElement).value);
  }
}
