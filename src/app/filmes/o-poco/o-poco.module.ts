import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OPocoPageRoutingModule } from './o-poco-routing.module';

import { OPocoPage } from './o-poco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OPocoPageRoutingModule
  ],
  declarations: [OPocoPage]
})
export class OPocoPageModule {}
