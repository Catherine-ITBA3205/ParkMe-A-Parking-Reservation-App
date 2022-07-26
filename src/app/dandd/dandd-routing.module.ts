import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DanddPage } from './dandd.page';

const routes: Routes = [
  {
    path: '',
    component: DanddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DanddPageRoutingModule {}
