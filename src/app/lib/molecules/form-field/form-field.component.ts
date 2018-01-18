import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'adp-form-field',
  styleUrls: ['./form-field.component.scss'],
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None,
})
export class FormFieldComponent {

  constructor() { }
}
