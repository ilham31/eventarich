import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

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
  orderData : any = [];
  token: any = localStorage.getItem('token');

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public orderprov : OrderProvider, public auth: AuthServiceProvider, 
              public storage: Storage, public alertCtrl : AlertController) {}

  ionViewDidEnter(){
    this.loadOrder(this.token);
  }
  //Load order sesuai User
  loadOrder(token) {
   this.orderprov.getOrder(token).then((data)=> {
      let temp: any = data;
      this.data = temp.json();
      this.orderData = this.data.orders;
    });
  }

  deleteOrderId(orderId) {
    this.orderprov.deleteOrder(this.token, orderId).then((data)=> {
        this.alertSuccess();
        this.loadOrder(this.token);
    });
  }

  addPesanan() {
    this.navCtrl.push('KebutuhaneventPage');
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      this.loadOrder(this.token);
      refresher.complete();
    }, 2000);
  }

  alertSuccess() {
    let alert = this.alertCtrl.create({
      subTitle: "Order berhasil dihapus",
      buttons: ['Oke']
    });
    alert.present();
  }

}