import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// import {SearchPage} from '../search/search';
// import{TambaheventPage} from '../tambahevent/tambahevent';
// import {KebutuhaneventPage} from '../kebutuhanevent/kebutuhanevent';
// import {EventPage} from '../event/event';
// import {VendorkamiPage} from'../vendorkami/vendorkami';
// import {ProfilPage} from'../profil/profil';

@IonicPage()
@Component({
  selector: 'page-setelahlogin',
  templateUrl: 'setelahlogin.html',
})

export class SetelahloginPage {
  // isLoggedIn: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  searchPage()
  {
    this.navCtrl.push('SearchPage');
  }
  
  addEvent()
  {
      this.navCtrl.push('TambaheventPage');
  }

  lihatEvent(){
    this.navCtrl.push('EventPage');
  }
  
}
