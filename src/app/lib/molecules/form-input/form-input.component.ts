import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'adp-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent {
  @Input() inputType: string;
  @Input() targetControl: FormControl;
  @Input() submitFailed?: false;
  @Input() placeholder?: string;
  @Input() label?: string;
  @Input() required?: boolean;
  @Input() errorMessages?: { [key: string]: string};

  constructor() { }
}
