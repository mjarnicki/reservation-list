import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { ModalController } from '@ionic/angular';
import { Invitation } from '../interface/invitation';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.page.html',
  styleUrls: ['./reservation-list.page.scss'],
})
export class ReservationListPage implements OnInit {

  reservations: Invitation[]
  dictionary: string[];

  constructor(
    private httpService: HttpService,
    public modalController: ModalController) { }

  ngOnInit() {

    const dictionaryFromLocalStorage = localStorage.getItem('dictionary');
    
    // jeżeli w local storage jest słownik, to przypisuję do zmiennej słownik z local storage i ładuję rezerwacje 
    if(dictionaryFromLocalStorage) {
      
      this.httpService.dictionary = dictionaryFromLocalStorage;
      this.loadReservations();

    } else {
      // jeżeli nie ma słownika, to najpierw ładuję słownik, a później rezerwacje
      this.httpService.loadDictionary().subscribe(dictionaryResp => {
        
        localStorage.setItem('dictionary', dictionaryResp.toString());
        this.httpService.dictionary = dictionaryResp.toString();
        this.loadReservations();
      });
    }
  }

  loadReservations() {
    this.httpService.getInvitationList().subscribe(reservationsResp => {
      this.reservations = reservationsResp;
    })
  }

  updateReservation(id, status) {
    const updateObject = {
      status: status
    }
    this.httpService.updateStatus(id, updateObject).subscribe(() => {
      this.loadReservations();
    })
  }

  removeReservation(id) {
    this.httpService.removeStatus(id).subscribe(() => {
      this.loadReservations();
    })
  }

  async newInvitationOpenModal() {

    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'modal-container'
    });

    modal.onDidDismiss()
      .then(() => {
        this.loadReservations();
    });

    return await modal.present();
  }
}
