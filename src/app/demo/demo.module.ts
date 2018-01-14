import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo.component';
import { MoleculesModule } from '../lib/molecules/molecules.module';
import { OrganismsModule } from '../lib/organisms/organisms.module';
import { InputTextModule } from 'primeng/primeng';
import { AtomsModule } from '../lib/atoms/atoms.module';
import { ButtonModule } from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MoleculesModule,
    OrganismsModule,
    AtomsModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    DemoComponent
  ]
})
export class DemoModule {
}
