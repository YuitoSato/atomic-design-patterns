import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template/template.component';
import { BlockComponent } from './block/block.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    TemplateComponent,
    BlockComponent,
  ],
  declarations: [
    TemplateComponent,
    BlockComponent,
  ],
})
export class OrganismsModule {
}
