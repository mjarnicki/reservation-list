import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'reservation-list',
    pathMatch: 'full'
  },
  {
    path: 'reservation-list',
    loadChildren: () => import('./reservation-list/reservation-list.module').then( m => m.ReservationListPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'testowa',
    loadChildren: () => import('./testowa/testowa.module').then( m => m.TestowaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
