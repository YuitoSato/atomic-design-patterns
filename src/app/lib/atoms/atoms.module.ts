import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelComponent } from './label/label.component';
import { ButtonComponent } from './button/button.component';
import { ButtonModule, InputTextModule } from 'primeng/primeng';
import { FormInputComponent } from './form-input/form-input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    ReactiveFormsModule,
    InputTextModule,
  ],
  exports: [
    LabelComponent,
    ButtonComponent,
    FormInputComponent,
  ],
  declarations: [
    LabelComponent,
    ButtonComponent,
    FormInputComponent,
  ]
})
export class AtomsModule { }
