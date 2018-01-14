import { Component, Input, OnInit } from '@angular/core';
import { bindBooleanProperty } from '../../../utiils/property-binder';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'adp-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {
  @Input() inputType: string;
  @Input() placeholder?: string;
  @Input() label?: string;
  @Input() required?: boolean;
  @Input() targetControl: FormControl;

  constructor() { }

  ngOnInit() {
    this.required = bindBooleanProperty(this.required);
  }
}
