import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo.component';
import { MoleculesModule } from '../lib/molecules/molecules.module';

@NgModule({
  imports: [
    CommonModule,
    MoleculesModule,
  ],
  declarations: [DemoComponent]
})
export class DemoModule { }
