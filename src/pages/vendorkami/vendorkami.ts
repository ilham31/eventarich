import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-vendorkami',
  templateUrl: 'vendorkami.html',
})
export class VendorkamiPage {
  tes:any;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public menuCtrl: MenuController,
              private storage : Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VendorkamiPage');
    this.menuCtrl.swipeEnable(false);
    this.menuCtrl.close();
    this.storage.get("token").then((val) => {
      console.log('tokennya', val);
    });
    console.log("isi dalam storage",this.tes);
  }


}
