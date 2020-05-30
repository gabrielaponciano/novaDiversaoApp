import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TomeJerryPageRoutingModule } from './tome-jerry-routing.module';

import { TomeJerryPage } from './tome-jerry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TomeJerryPageRoutingModule
  ],
  declarations: [TomeJerryPage]
})
export class TomeJerryPageModule {}
