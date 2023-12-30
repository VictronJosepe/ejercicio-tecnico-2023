import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'rounded-input',
  templateUrl: './rounded-input.component.html',
  styleUrls: ['./rounded-input.component.scss']
})
export class RoundedInputComponent {
  @Input() placeholder: string = "";
  @Input() label?: string;
  @Input() customClass: string = "basic";
  @Input() errorMessage: string = "";
  @Input() type: string = "";
  @Input() disabled: boolean = false;

  @Input() value: any;
  @Output() valueChange = new EventEmitter<any>();

  protected getClass() {

    if (this.errorMessage)
      return 'error';
    if(this.disabled)
      return 'disabled';

    return this.customClass;
  }

}
