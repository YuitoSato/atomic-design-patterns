import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template/template.component';
import { BlockComponent } from './block/block.component';
import { InlineBlockComponent } from './inline-block/inline-block.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    TemplateComponent,
    BlockComponent,
    InlineBlockComponent,
  ],
  declarations: [
    TemplateComponent,
    BlockComponent,
    InlineBlockComponent,
  ],
})
export class OrganismsModule {
}
