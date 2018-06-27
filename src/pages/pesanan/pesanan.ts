import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {OrderProvider} from '../../providers/order/order';
@IonicPage()
@Component({
  selector: 'page-pesanan',
  templateUrl: 'pesanan.html',
})
export class PesananPage {
  data : any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public orderprov : OrderProvider) {
    this.loadOrder();
  }

 loadOrder()
 {
   this.orderprov.getOrder().then((datas)=>{
     this.data = datas
     console.log("data",this.data);
   })
 }

  addPesanan()
{
  this.navCtrl.push('KebutuhaneventPage')
}

}