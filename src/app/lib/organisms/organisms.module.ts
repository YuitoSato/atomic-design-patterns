import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template/template.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SideBarIconComponent } from './side-bar/side-bar-icon/side-bar-icon.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { ContentComponent } from './content/content.component';
import { DataTableComponent } from './data-table/data-table.component';
import { AppRoutingModule } from '../../app.routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [
    TemplateComponent,
    SideBarComponent,
    MainHeaderComponent,
    ContentComponent,
    DataTableComponent,
  ],
  declarations: [
    TemplateComponent,
    SideBarComponent,
    SideBarIconComponent,
    MainHeaderComponent,
    ContentComponent,
    DataTableComponent,
  ],
})
export class OrganismsModule {
}
