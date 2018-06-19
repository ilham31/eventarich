import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-vendorkami',
  templateUrl: 'vendorkami.html',
})
export class VendorkamiPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VendorkamiPage');
    this.menuCtrl.swipeEnable(false);
    this.menuCtrl.close();
  }


}
