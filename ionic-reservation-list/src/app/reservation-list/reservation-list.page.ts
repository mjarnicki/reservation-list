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
  dictionaryLoadFlag:boolean = false;

  constructor(
    private httpService: HttpService,
    public modalController: ModalController) { }

  ngOnInit() {
    this.httpService.getInvitationList().subscribe(reservationsResp => {
      this.reservations = reservationsResp;
    })

    if (!this.dictionaryLoadFlag) {
      this.httpService.loadDictionary().subscribe(dictionaryResp => {
        this.dictionary = dictionaryResp
        this.dictionaryLoadFlag = true;
      });
    }
   
  }

  loadDictionary() {
    
  }

  async newInvitationOpenModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'modal-container'
    });
    return await modal.present();
  }



}
