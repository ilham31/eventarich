import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,Loading, LoadingController } from 'ionic-angular';
import { NgForm } from '@angular/forms';

import { OrderProvider } from '../../providers/order';
import { AuthServiceProvider } from './../../providers/auth-service';

@IonicPage()
@Component({
  selector: 'page-kebutuhanevent',
  templateUrl: 'kebutuhanevent.html',
})
export class KebutuhaneventPage {
  selectedLeave : any;
  budget : number;
  deskripsiPesanan : string ='';
  alamat : string = '';
  myDate :string ='';
  submitted = false;
  token : any;
  loading: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController, private loadCtrl: LoadingController,public orderprovider : OrderProvider, public auth: AuthServiceProvider) {
    // this.auth.cekToken();
    // this.getToken();
  }


  // getToken() {
  //   this.orderprovider.assignToken().then((data) => {
  //     this.token = data;
  //     console.log('ionViewDidLoad ProfilPage');
  //     console.log("token", this.token);
  //   });
  // }


  pesan(form : NgForm) {
    this.showLoader();
    this.submitted=true;
    if(form.valid) {
        let orderData = {
          categoryId: this.selectedLeave,
          date: this.myDate,
          description: this.deskripsiPesanan,
          address:this.alamat,
          budget:this.budget,
        }
        console.log("kategori",this.selectedLeave);
        console.log("order data",orderData);
        this.orderprovider.order(orderData).then((result)=>{
          this.loading.dismiss();
        },(err) => {
          this.loading.dismiss();
          this.presentToast(err);
          console.log(err);
        });
      console.log("data",this.selectedLeave,this.myDate,this.budget,this.deskripsiPesanan,this.alamat)
    }
    else {
      this.presentToast("Form tidak valid");
    }
  }

  showLoader() {
    this.loading = this.loadCtrl.create({
      content: 'memuat..'
    });

    this.loading.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });
    
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPage');
    console.log("token",this.token);
    // this.getToken();
  }

}
