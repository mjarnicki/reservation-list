import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestowaPage } from './testowa.page';

const routes: Routes = [
  {
    path: '',
    component: TestowaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestowaPageRoutingModule {}
