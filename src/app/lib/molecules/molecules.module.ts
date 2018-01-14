import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormInputComponent } from './form-input/form-input.component';
import { FormErrorComponent } from './form-error/form-error.component';
import { AtomsModule } from '../atoms/atoms.module';
import { InputTextModule } from 'primeng/primeng';
import { ReactiveFormsModule } from '@angular/forms';

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
  ],
  declarations: [
    FormInputComponent,
    FormErrorComponent,
  ]
})
export class MoleculesModule { }
