import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
  { path: '', component: DemoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
