import { AbstractControl, ValidatorFn } from '@angular/forms';

export function confirmValueValidator(confirmValue: any): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const confirm = control.value === confirmValue;
    return confirm ? {'confirm': {value: control.value}} : null;
  };
}
