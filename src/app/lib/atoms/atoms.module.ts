import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelComponent } from './label/label.component';
import { ButtonComponent } from './button/button.component';
import { ButtonModule, InputTextModule } from 'primeng/primeng';
import { FormInputComponent } from './form-input/form-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ActionIconComponent } from './action-icon/action-icon.component';

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
    ActionIconComponent,
  ],
  declarations: [
    LabelComponent,
    ButtonComponent,
    FormInputComponent,
    ActionIconComponent,
  ]
})
export class AtomsModule { }
