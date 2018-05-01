import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SearchPage} from '../search/search';
import{TambaheventPage} from '../tambahevent/tambahevent';
import {KebutuhaneventPage} from '../kebutuhanevent/kebutuhanevent';
import {EventPage} from '../event/event';
import {VendorkamiPage} from'../vendorkami/vendorkami';
import {ProfilPage} from'../profil/profil';
/**
 * Generated class for the SetelahloginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-setelahlogin',
  templateUrl: 'setelahlogin.html',
})
export class SetelahloginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetelahloginPage');
  }
  searchPage()
  {
    this.navCtrl.push(SearchPage);
  }
  kebutuhan()
  {
      this.navCtrl.push(KebutuhaneventPage);
  }
  addEvent()
  {
      this.navCtrl.push(TambaheventPage);
  }
  lihatEvent(){
    this.navCtrl.push(EventPage);
  }
  vendorkami()
  {
    this.navCtrl.push(VendorkamiPage)
  }
  akun()
  {
    this.navCtrl.push(ProfilPage);
  }

}
