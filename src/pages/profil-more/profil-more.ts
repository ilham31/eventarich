import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { AuthServiceProvider } from '../../providers/auth-service';

@IonicPage()
@Component({
  selector: 'page-profil-more',
  templateUrl: 'profil-more.html',
})
export class ProfilMorePage {

  private loading: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public storage: Storage, 
              public auth: AuthServiceProvider,
              public toastCtrl: ToastController,
              public loadCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilMorePage');
  }

  logout() {
    this.showLoader();
    this.auth.logout();
    this.navCtrl.setRoot('HomePage');
    this.loading.dismiss();
  }

  updateProfile() {
    this.navCtrl.push('ProfileMoreUpdatePage');
  }

  showLoader() {
    this.loading = this.loadCtrl.create({
      content: 'memuat..'
    });

    this.loading.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });
    
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

}
