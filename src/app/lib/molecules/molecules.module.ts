import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormInputComponent } from '../atoms/form-input/form-input.component';
import { FormErrorComponent } from './form-error/form-error.component';
import { AtomsModule } from '../atoms/atoms.module';
import { InputTextModule } from 'primeng/primeng';
import { ReactiveFormsModule } from '@angular/forms';
import { BlockComponent } from './block/block.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';

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
    BlockComponent,
    HeaderComponent,
    CardComponent,
  ],
  declarations: [
    FormInputComponent,
    FormErrorComponent,
    BlockComponent,
    HeaderComponent,
    CardComponent,
  ]
})
export class MoleculesModule { }
