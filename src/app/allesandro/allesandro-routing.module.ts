import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllesandroPage } from './allesandro.page';

const routes: Routes = [
  {
    path: '',
    component: AllesandroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllesandroPageRoutingModule {}
