import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { G1917Page } from './g1917.page';

const routes: Routes = [
  {
    path: '',
    component: G1917Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class G1917PageRoutingModule {}
