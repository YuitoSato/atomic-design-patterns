import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DemoComponent } from './demo/demo.component';
import { DemoFormComponent } from './demo/demo-form/demo-form.component';
import { DemoTableComponent } from './demo/demo-table/demo-table.component';
import { DemoOverlayComponent } from './demo/demo-overlay/demo-overlay.component';

const routes: Routes = [
  {
    path: '', component: DemoComponent,
    children: [
      {
        path: 'form', component: DemoFormComponent,
      },
      {
        path: 'table', component: DemoTableComponent,
      },
      {
        path: 'overlay', component: DemoOverlayComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
