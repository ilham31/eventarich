import { Component } from '@angular/core';
import { App, NavController, MenuController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public menuCtrl : MenuController) {

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