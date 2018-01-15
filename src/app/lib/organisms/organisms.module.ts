import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template/template.component';
import { BlockComponent } from './block/block.component';
import { FormComponent } from './form/form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    TemplateComponent,
    BlockComponent,
    FormComponent,
  ],
  declarations: [
    TemplateComponent,
    BlockComponent,
    FormComponent,
  ],
})
export class OrganismsModule {
}
