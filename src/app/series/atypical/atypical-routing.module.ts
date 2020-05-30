import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtypicalPage } from './atypical.page';

const routes: Routes = [
  {
    path: '',
    component: AtypicalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtypicalPageRoutingModule {}
