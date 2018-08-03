import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController } from 'ionic-angular';

import { AuthServiceProvider } from '../../providers/auth-service';
import { NgForm } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-profile-more-update',
  templateUrl: 'profile-more-update.html',
})
export class ProfileMoreUpdatePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private users : AuthServiceProvider, private loadCtrl: LoadingController,
              private toastCtrl: ToastController, private alertCtrl: AlertController) {
  }

  token = localStorage.getItem('token');
  submitted = false;
  loading: any;

  description : any = localStorage.getItem('userDescription') === 'undefined' ? 'Belum ada deskripsi' : localStorage.getItem('userDescription');
  username: any = localStorage.getItem('userName');
  address: any = localStorage.getItem('userAddress');
  phone_number: string = localStorage.getItem('userPhone');

  data : any;
  

  profileUpdate(form: NgForm) {
    this.showLoaderLoad();
    this.submitted = true;
    if(form.valid) {
      let updateData = {
        description: this.description,
        name: this.username,
        address: this.address,
        phone_number: this.phone_number 
      };
      // this.showLoader();
      this.users.updateProfile(updateData, this.token).then((result) => {
        console.log('User Profile Updated', updateData.name);
        localStorage.setItem('userName', updateData.name);
        localStorage.setItem('userAddress', updateData.address);
        localStorage.setItem('userPhone', updateData.phone_number);
        localStorage.setItem('userDescription', updateData.description);
        this.loading.dismiss();
        this.navCtrl.pop();
        this.alertSuccess('Perubahan Berhasil', 'Berhasil merubah profile Anda');
      }, (err) => {
        this.loading.dismiss();
        this.presentToast(err);
        console.log(err);
      });
    } else {
      this.presentToast("Form belum terisi");
    }
  }

  showLoaderLoad() {
    this.loading = this.loadCtrl.create({
      content: 'memuat....'
    });

    this.loading.present();
  }

  alertSuccess(title, subtitle) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subtitle,
      buttons: ['Oke']
    });
    alert.present();
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
