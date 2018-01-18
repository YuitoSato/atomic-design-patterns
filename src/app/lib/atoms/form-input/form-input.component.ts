import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'adp-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent {
  @Input() targetControl: FormControl;
  @Input() inputType?: string;
  @Input() submitFailed?: false;
  @Input() placeholder?: string;

  constructor() { }
}
