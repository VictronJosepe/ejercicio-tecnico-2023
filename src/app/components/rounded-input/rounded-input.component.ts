import { Component, Input } from '@angular/core';

@Component({
  selector: 'rounded-input',
  templateUrl: './rounded-input.component.html',
  styleUrls: ['./rounded-input.component.scss']
})
export class RoundedInputComponent {
  @Input() placeholder?: String;
}
