import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'adp-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.scss']
})
export class FormErrorComponent implements OnInit {
  @Input() targetControl: FormControl;
  @Input() errorMessages: { [key: string]: string};
  @Input() submitFailed?: false;

  constructor() { }

  ngOnInit() {
  }

  public getValidatorTypes(): string[] {
    return Object.keys(this.errorMessages);
  }
}
