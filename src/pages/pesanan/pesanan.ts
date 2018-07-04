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
  token: any = localStorage.getItem('token');

  constructor(public navCtrl: NavController, public navParams: NavParams, public orderprov : OrderProvider, public auth: AuthServiceProvider, public storage: Storage) {
    this.loadOrder(this.token);
  }

<<<<<<< HEAD

 loadOrder() {
   this.orderprov.getOrder().then((datas)=>{
     return datas;
   });
 }
=======
  //Load order sesuai User
  loadOrder(token) {
   this.orderprov.getOrder(token).then((data)=> {
      let temp: any = data;
      this.data = temp.json();
      console.log("data", this.data);
    });
  }
>>>>>>> fa68364a36fcd8ac6ed258e8587cc2c4c66caf37

  addPesanan() {
    this.navCtrl.push('KebutuhaneventPage');
  }

}