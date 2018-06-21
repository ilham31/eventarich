import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pesanan',
  templateUrl: 'pesanan.html',
})
export class PesananPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PesananPage');
  }


  addPesanan() {
    this.navCtrl.push('KebutuhaneventPage');
  }

}
