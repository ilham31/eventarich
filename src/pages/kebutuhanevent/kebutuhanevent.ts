import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,Loading, LoadingController, AlertController } from 'ionic-angular';
import { NgForm } from '@angular/forms';

import { OrderProvider } from '../../providers/order';
import { AuthServiceProvider } from './../../providers/auth-service';

@IonicPage()
@Component({
  selector: 'page-kebutuhanevent',
  templateUrl: 'kebutuhanevent.html',
})
export class KebutuhaneventPage {
  kategoriPesanan : any;
  budgetUser : number;
  deskripsiPesanan : string ='';
  alamatUser : string = '';
  tanggalDibutuhkan :string ='';

  submitted = false;
  token : any = localStorage.getItem('token');
  loading: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, 
              private toastCtrl: ToastController, private loadCtrl: LoadingController,
              public orderprovider : OrderProvider, public auth: AuthServiceProvider,
              public alertCtrl : AlertController) {}

  // Post order dengan masukan form dan token
  pesan(form : NgForm) {
    this.showLoader();
    this.submitted=true;
    if(form.valid) {
        let orderData = {
          categoryId: this.kategoriPesanan,
          date: this.tanggalDibutuhkan,
          description: this.deskripsiPesanan,
          address:this.alamatUser,
          budget:this.budgetUser,
        }
        this.orderprovider.orderKebutuhan(orderData, this.token).then((result)=>{
          this.loading.dismiss();
          this.alertSuccess();
          this.navCtrl.pop();
        },(err) => {
          this.loading.dismiss();
          this.presentToast(err);
          console.log(err);
        });
    } else {
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

  alertSuccess() {
    let alert = this.alertCtrl.create({
      subTitle: "Order berhasil dibuat",
      buttons: ['Oke']
    });
    alert.present();
  }

}
