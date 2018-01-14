import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormInputComponent } from './form-input/form-input.component';
import { FormErrorComponent } from './form-error/form-error.component';
import { AtomsModule } from '../atoms/atoms.module';
import { InputTextModule } from 'primeng/primeng';
import { TemplateHeaderComponent } from './template-header/template-header.component';

@NgModule({
  imports: [
    CommonModule,
    AtomsModule,
    InputTextModule,
  ],
  exports: [
    FormInputComponent,
  ],
  declarations: [
    FormInputComponent,
    FormErrorComponent,
    TemplateHeaderComponent,
  ]
})
export class MoleculesModule { }
