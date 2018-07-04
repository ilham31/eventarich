import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { OrderProvider } from '../../providers/order';
import { AuthServiceProvider } from './../../providers/auth-service';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-pesanan',
  templateUrl: 'pesanan.html',
})
export class PesananPage {
  data : any;
  public token: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public orderprov : OrderProvider, public auth: AuthServiceProvider, public storage: Storage) {
    // this.loadOrder();
  }
  ionViewWillEnter()
  {
    this.loadOrder();
  }


 loadOrder() {
   this.orderprov.getOrder().then((datas)=>{
     return datas;
   });
 }

  addPesanan() {
    this.navCtrl.push('KebutuhaneventPage');
  }

}