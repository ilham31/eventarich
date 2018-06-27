import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-kebutuhanevent',
  templateUrl: 'kebutuhanevent.html',
})
export class KebutuhaneventPage {
  selectedLeave : string = '';
  budget : number;
  deskripsiPesanan : string ='';
  alamat : string = '';
  myDate :string ='';
  submitted = false;
  constructor(public navCtrl: NavController, public navParams: NavParams,private toastCtrl: ToastController) {
  }

  pesan(form : NgForm)
  {
    this.submitted=true;
    if(form.valid)
    {
      console.log("data",this.selectedLeave,this.myDate,this.budget,this.deskripsiPesanan,this.alamat)
    }
    else
    {
      this.presentToast("form tidak valid");
      console.log("form tidak valid")
    }
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
}
