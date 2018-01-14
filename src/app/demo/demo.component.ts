import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'adp-demo',
  templateUrl: './demo.component.html',
  styleUrls: [
    './demo.component.scss',
    '../../assets/styles/form.scss',
  ]
})
export class DemoComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {
    this.form = this.createForm();
  }

  private createForm(): FormGroup {
    return this.fb.group({
      'lastName': '',
      'firstName': '',
      'password': '',
      'emailAddress': '',
      'confirmEmailAddress': '',
      'organization': '',
    });
  }
}
