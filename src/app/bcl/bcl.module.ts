import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BclPageRoutingModule } from './bcl-routing.module';

import { BclPage } from './bcl.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BclPageRoutingModule
  ],
  declarations: [BclPage]
})
export class BclPageModule {}
