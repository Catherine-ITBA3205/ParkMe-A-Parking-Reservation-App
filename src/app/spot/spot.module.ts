import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpotPageRoutingModule } from './spot-routing.module';

import { SpotPage } from './spot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpotPageRoutingModule
  ],
  declarations: [SpotPage]
})
export class SpotPageModule {}
