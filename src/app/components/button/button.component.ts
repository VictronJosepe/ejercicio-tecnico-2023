import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() value: String = "New";
  @Input() customClass: string = 'basic';
  @Input() type: string = "button;"
  @Input() isDisabled: boolean = false;
}
