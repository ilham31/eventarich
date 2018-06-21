import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private storage : Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPage');
  }

  back()
  {
    this.navCtrl.setRoot('SetelahloginPage');
  }
logout()
{
  this.storage.set("token","");
  this.storage.get("token").then((val)=>{
    console.log("isi token",val);
  });
  this.navCtrl.setRoot('HomePage');
}
}
