import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllesandroPageRoutingModule } from './allesandro-routing.module';

import { AllesandroPage } from './allesandro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllesandroPageRoutingModule
  ],
  declarations: [AllesandroPage]
})
export class AllesandroPageModule {}
