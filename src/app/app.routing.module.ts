import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DemoComponent } from './demo/demo.component';
import { DemoFormComponent } from './demo/demo-form/demo-form.component';
import { DemoTableComponent } from './demo/demo-table/demo-table.component';

const routes: Routes = [
  {
    path: '', component: DemoComponent,
    children: [
      {
        path: 'form', component: DemoFormComponent,
      },
      {
        path: 'table', component: DemoTableComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
