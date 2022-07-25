import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlotPageRoutingModule } from './slot-routing.module';

import { SlotPage } from './slot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlotPageRoutingModule
  ],
  declarations: [SlotPage]
})
export class SlotPageModule {}
