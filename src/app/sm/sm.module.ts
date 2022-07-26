import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SmPageRoutingModule } from './sm-routing.module';

import { SmPage } from './sm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SmPageRoutingModule
  ],
  declarations: [SmPage]
})
export class SmPageModule {}
