import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template/template.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SideBarIconComponent } from './side-bar/side-bar-icon/side-bar-icon.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { ContentComponent } from './content/content.component';
import { DataTableComponent } from './data-table/data-table.component';
import { AppRoutingModule } from '../../app.routing.module';
import { ModalComponent } from './modal/modal.component';
import { ModalBodyComponent } from './modal/modal-body/modal-body.component';
import { ModalFooterComponent } from './modal/modal-footer/modal-footer.component';
import { DialogModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    DialogModule,
  ],
  exports: [
    TemplateComponent,
    SideBarComponent,
    MainHeaderComponent,
    ContentComponent,
    DataTableComponent,
    ModalComponent,
    ModalBodyComponent,
    ModalFooterComponent,
  ],
  declarations: [
    TemplateComponent,
    SideBarComponent,
    SideBarIconComponent,
    MainHeaderComponent,
    ContentComponent,
    DataTableComponent,
    ModalComponent,
    ModalBodyComponent,
    ModalFooterComponent,
  ],
})
export class OrganismsModule {
}
