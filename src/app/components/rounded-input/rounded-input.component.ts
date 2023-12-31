import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ValidationUtilsService } from 'src/app/services/validationUtils/validation-utils.service';

@Component({
  selector: 'rounded-input',
  templateUrl: './rounded-input.component.html',
  styleUrls: ['./rounded-input.component.scss']
})
export class RoundedInputComponent {
  @Input() placeholder: string = "";
  @Input() label?: string;
  @Input() customClass: string = "basic";
  @Input() type: string = "";
  @Input() control: FormControl = new FormControl();

  @Input() value: any;
  @Output() valueChange = new EventEmitter<any>();

  protected getClass() {
    if (this.isInvalid())
      return 'error';

    return this.customClass;
  }

  protected getMessage() {
    return ValidationUtilsService.getMessage(this.control);
  }

  private isInvalid(): boolean {
    return ValidationUtilsService.isInvalid(this.control);
  }
}
