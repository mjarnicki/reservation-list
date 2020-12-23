import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservationListPageRoutingModule } from './reservation-list-routing.module';

import { ReservationListPage } from './reservation-list.page';

import { StatusNamePipe } from '../pipes/status-name.pipe';
import { StatusMarkPipe } from '../pipes/status-mark.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservationListPageRoutingModule
  ],
  declarations: [ReservationListPage, StatusNamePipe, StatusMarkPipe]
})
export class ReservationListPageModule {}
