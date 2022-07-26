import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BclPage } from './bcl.page';

const routes: Routes = [
  {
    path: '',
    component: BclPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BclPageRoutingModule {}
