import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormInputComponent } from '../atoms/form-input/form-input.component';
import { FormErrorComponent } from './form-error/form-error.component';
import { AtomsModule } from '../atoms/atoms.module';
import { InputTextModule } from 'primeng/primeng';
import { ReactiveFormsModule } from '@angular/forms';
import { FormFieldComponent } from './form-field/form-field.component';
import { FormFieldSetComponent } from './form-field/form-field-set/form-field-set.component';

@NgModule({
  imports: [
    CommonModule,
    AtomsModule,
    InputTextModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormInputComponent,
    FormErrorComponent,
    FormFieldComponent,
    FormFieldSetComponent,
  ],
  declarations: [
    FormInputComponent,
    FormErrorComponent,
    FormFieldComponent,
    FormFieldSetComponent,
  ]
})
export class MoleculesModule { }
