import { Component } from '@angular/core';
import { App, NavController, MenuController, IonicPage } from 'ionic-angular';

import { AuthServiceProvider } from '../../providers/auth-service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  variable: boolean;

  constructor(public navCtrl: NavController,
              public menuCtrl : MenuController,
              public auth: AuthServiceProvider
            ) {

    this.auth.hasLoggedIn().then((value) => {
      if(value) {
        this.variable = true;
      } else {
        this.variable = false;
      }
    });

  }
  login(){
    this.navCtrl.push('LoginPage');
    this.menuCtrl.close();
  }
  searchPage()
  {
    this.navCtrl.push('SearchPage');
  }
  lihatEvent(){
    this.navCtrl.push('EventPage');
  }
  vendorkami()
  {
    this.navCtrl.push('VendorkamiPage');
  }
  lihatprofil()
  {
    this.navCtrl.push('EditprofilePage');
  }
  oderlogistik()
  {
    this.navCtrl.push('OrderlogistikPage');
  }

}