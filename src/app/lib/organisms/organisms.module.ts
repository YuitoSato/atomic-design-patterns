import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template/template.component';
import { FormComponent } from './form/form.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SideBarIconComponent } from './side-bar/side-bar-icon/side-bar-icon.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    TemplateComponent,
    FormComponent,
    SideBarComponent,
  ],
  declarations: [
    TemplateComponent,
    FormComponent,
    SideBarComponent,
    SideBarIconComponent,
  ],
})
export class OrganismsModule {
}
