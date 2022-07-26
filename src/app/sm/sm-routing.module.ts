import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmPage } from './sm.page';

const routes: Routes = [
  {
    path: '',
    component: SmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmPageRoutingModule {}
