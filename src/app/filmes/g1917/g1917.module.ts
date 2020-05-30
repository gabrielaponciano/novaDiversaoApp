import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { G1917PageRoutingModule } from './g1917-routing.module';

import { G1917Page } from './g1917.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    G1917PageRoutingModule
  ],
  declarations: [G1917Page]
})
export class G1917PageModule {}
