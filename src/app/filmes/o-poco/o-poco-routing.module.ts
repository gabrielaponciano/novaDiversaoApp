import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OPocoPage } from './o-poco.page';

const routes: Routes = [
  {
    path: '',
    component: OPocoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OPocoPageRoutingModule {}
