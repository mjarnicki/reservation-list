import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestowaPageRoutingModule } from './testowa-routing.module';

import { TestowaPage } from './testowa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestowaPageRoutingModule
  ],
  declarations: [TestowaPage]
})
export class TestowaPageModule {}
