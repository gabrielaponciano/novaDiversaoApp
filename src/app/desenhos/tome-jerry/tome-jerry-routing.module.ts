import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TomeJerryPage } from './tome-jerry.page';

const routes: Routes = [
  {
    path: '',
    component: TomeJerryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TomeJerryPageRoutingModule {}
