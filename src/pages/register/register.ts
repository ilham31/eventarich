import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController } from 'ionic-angular';

import { AuthServiceProvider } from '../../providers/auth-service';
import { NgForm } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  submitted = false;
  status = "password";
  look = true;

  loading: any;
  email: string;
  username: string;
  address: string;
  phone_number: number;
  password: string;
  data : any;
  

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public authService: AuthServiceProvider,
              public loadCtrl: LoadingController,
              private toastCtrl: ToastController,
              private alertCtrl: AlertController
            ) {}

  doSignup(form: NgForm) {
    this.showLoaderLoad();
    this.submitted = true;
    if(form.valid) {
      let regData = { 
        email:this.email, 
        password:this.password,
        name:this.username,
        address:this.address,
        phone_number:this.phone_number 
      };
      // this.showLoader();
      this.authService.signup(regData).then((result) => {
        console.log('user Created');
        this.loading.dismiss();
        this.navCtrl.push('LoginPage');
        this.alertSuccess();
      }, (err) => {
        this.loading.dismiss();
        if(err.status === 409) {
          this.presentToast('Email sudah digunakan, mohon untuk mengganti dengan yang lebih unik');
        } else {
          this.presentToast(err);
        }
        console.log(err);
      });
    } else {
      this.presentToast("Form belum terisi");
      this.loading.dismiss();
    }
  }

  showPassword(){
    this.status = "text";
    this.look = false;
    console.log(this.status);
  }

  hidePassword(){
    this.status = "password";
    this.look = true;
    console.log(this.status);
  }

  showLoaderLoad() {
    this.loading = this.loadCtrl.create({
      content: 'memuat....'
    });

    this.loading.present();
  }

  alertSuccess() {
    let alert = this.alertCtrl.create({
      title: 'Anda Sudah Terdaftar',
      subTitle: 'Silahkan lakukan login pertama Anda!',
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
