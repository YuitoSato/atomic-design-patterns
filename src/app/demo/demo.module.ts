import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo.component';
import { MoleculesModule } from '../lib/molecules/molecules.module';
import { OrganismsModule } from '../lib/organisms/organisms.module';
import { InputTextModule } from 'primeng/primeng';
import { AtomsModule } from '../lib/atoms/atoms.module';
import { ButtonModule } from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoFormComponent } from './demo-form/demo-form.component';
import { AppRoutingModule } from '../app.routing.module';
import { DemoTableComponent } from './demo-table/demo-table.component';
import { DemoOverlayComponent } from './demo-overlay/demo-overlay.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    DemoComponent,
    DemoFormComponent,
    DemoTableComponent,
    DemoOverlayComponent
  ]
})
export class DemoModule {
}
