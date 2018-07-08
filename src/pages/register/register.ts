import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

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
              private toastCtrl: ToastController
            ) {}

  doSignup(form: NgForm) {
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
        this.loading.dismiss();
        this.navCtrl.push('LoginPage');
      }, (err) => {
        this.loading.dismiss();
        this.presentToast(err);
        console.log(err);
      });
    } else {
      this.presentToast("form belum terisi");
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

  showLoader() {
    this.loading = this.loadCtrl.create({
      content: 'memuat....'
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

}
