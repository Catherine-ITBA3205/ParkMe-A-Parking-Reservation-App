import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlotPage } from './slot.page';

const routes: Routes = [
  {
    path: '',
    component: SlotPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlotPageRoutingModule {}
