import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainmenuPage } from './mainmenu.page';

const routes: Routes = [
  {
    path: '',
    component: MainmenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainmenuPageRoutingModule {}
