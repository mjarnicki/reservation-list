import { Invitation } from './../interface/invitation';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpService } from '../services/http.service';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(
    public modalController: ModalController,
    private httpService: HttpService,
    private loadingController: LoadingController,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  invitation: Partial<Invitation> = {
    status: 0,
  };
  hideParkingReservation: boolean = true;
  loading: any;

  hideModal() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  logForm() {
    this.showLoading();
    this.httpService.addNewInvitation(this.invitation).subscribe(() => {
      // TODO setIimeout mi się nie podoba, może będzie się dało jakoś poprawić 
      setTimeout(() => {
        this.loading.dismiss();
        this.hideModal();
        this.showAlert();
        this.httpService.getInvitationList().subscribe()
      }, 200)

    })
  }

  toggleParkingReservation(){
    this.hideParkingReservation = !this.hideParkingReservation;
  }

  async showLoading() {
    this.loading = await this.loadingController.create({
      cssClass: 'loader-container',
      message: 'Prosze czekać...',
    });
    await this.loading.present();
  }

  showAlert() {
    this.alertController.create({
      header: 'Zaproszenie zostało dodane',
      cssClass: 'alert-container',
      buttons: ['ok']
    }).then(alertEl => {
      alertEl.present();
    })
  }

}
