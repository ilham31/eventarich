import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { AuthServiceProvider } from '../../providers/auth-service';

@IonicPage()
@Component({
  selector: 'page-profil-more',
  templateUrl: 'profil-more.html',
})
export class ProfilMorePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public auth: AuthServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilMorePage');
  }

  logout()
  {
    this.auth.logout();
    this.navCtrl.setRoot('HomePage');
  }

}
