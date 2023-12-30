import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() value: String = "New";
  @Input() onClick!: () => void;
  @Input() customClass: string = 'basic';


  executeFunction() {
    this.onClick();
  }
}
