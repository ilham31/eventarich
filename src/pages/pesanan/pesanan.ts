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
  dataOrder:any;
  tanggalOrder : any;
  tahun:any;
  bulan:any;
  hari:any;
  date:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public orderprov : OrderProvider, public auth: AuthServiceProvider, public storage: Storage) {
    this.loadOrder(this.token);
  }

  //Load order sesuai User
  loadOrder(token) {
   this.orderprov.getOrder(token).then((data)=> {
      let temp: any = data;
      this.data = temp.json();
      this.dataOrder = this.data.orders;
      
      // for(var i=0;i<this.dataOrder.length;i++)
      // {
      //   console.log("tanggal",this.dataOrder[i].date);
      //   this.tanggalOrder=this.dataOrder[i].date.split("-");
      //   this.tahun=this.tanggalOrder[0];
      //   this.hari=this.tanggalOrder[1];
      //   this.bulan=this.tanggalOrder[2].substring(0,2);
      //   this.date[i]={
      //     tanggal:this.hari,
      //     bulan:this.bulan,
      //     tahun:this.tahun
      //    }
      //  console.log("data tanggal",this.date[i])
      // }  
      
      
      console.log("data", this.dataOrder);
      
    });
  }

  addPesanan() {
    this.navCtrl.push('KebutuhaneventPage');
  }

}