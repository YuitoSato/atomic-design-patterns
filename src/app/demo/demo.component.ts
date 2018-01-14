import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

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

  errorMessages: { [key: string]: { [key: string]: string } } = {
    lastName: {
      required:  '苗字を入力してください',
      maxlength: '20文字以内で入力してください',
    },
    firstName: {
      required:  '名前を入力してください',
      maxlength: '20文字以内で入力してください',
    },
    password: {
      required:  'パスワードを入力してください',
      maxlength: '20文字以内で入力してください',
      minlength: '8文字以上で入力してください',
    },
    email: {
      required:  'メールアドレスを入力してください',
      maxlength: '50文字以内で入力してください',
    },
    emailConfirm: {
      required:  '確認用のメールアドレスを入力してください',
      maxlength: '50文字以内で入力してください',
      confirmEmail:   'メールアドレスが一致しません',
    },
    organization1: {
      maxlength: '50文字以内で入力してください'
    },
    organization2: {
      maxlength: '50文字以内で入力してください'
    }
  };

  constructor(
    private fb: FormBuilder,
  ) {
    this.form = this.createForm();
  }

  private createForm(): FormGroup {
    return this.fb.group({
      lastName:     ['', [Validators.required, Validators.maxLength(20)]],
      firstName:    ['', [Validators.required, Validators.maxLength(20)]],
      password:     ['', [Validators.required, Validators.maxLength(20), Validators.minLength(8)]],
      email:        ['', [Validators.required, Validators.maxLength(50)]],
      emailConfirm: ['', [Validators.required, Validators.maxLength(50)]],
      organization1: ['', [Validators.maxLength(50)]],
      organization2: ['', [Validators.maxLength(50)]],
    },
    {
      validator: this.validateEmailNotConfirmed
    });
  }

  private validateEmailNotConfirmed(g: FormGroup): ValidationErrors | null {
    const { email, emailConfirm } = g.value;
    return email === emailConfirm ? null : { confirmEmail: true };
  }
}
