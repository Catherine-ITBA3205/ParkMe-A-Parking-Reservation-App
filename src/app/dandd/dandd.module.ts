import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DanddPageRoutingModule } from './dandd-routing.module';

import { DanddPage } from './dandd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DanddPageRoutingModule
  ],
  declarations: [DanddPage]
})
export class DanddPageModule {}
