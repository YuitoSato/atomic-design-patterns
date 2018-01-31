import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormErrorComponent } from './form-error/form-error.component';
import { AtomsModule } from '../atoms/atoms.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BlockComponent } from './block/block.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [
    CommonModule,
    AtomsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormErrorComponent,
    BlockComponent,
    HeaderComponent,
    CardComponent,
  ],
  declarations: [
    FormErrorComponent,
    BlockComponent,
    HeaderComponent,
    CardComponent,
  ]
})
export class MoleculesModule { }
