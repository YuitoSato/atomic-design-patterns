import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template/template.component';
import { FormComponent } from './form/form.component';
import { SideBarComponent } from './side-bar/side-bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    TemplateComponent,
    FormComponent,
  ],
  declarations: [
    TemplateComponent,
    FormComponent,
    SideBarComponent,
  ],
})
export class OrganismsModule {
}
