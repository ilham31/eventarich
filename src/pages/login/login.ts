import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

import { AuthServiceProvider } from './../../providers/auth-service';

// import { SetelahloginPage } from '../setelahlogin/setelahlogin';
// import { RegisterPage } from '../register/register';
// import { HomePage } from './../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  submitted = false;
  status = "password";
  look = true;

  token: string;
  
  loading: any;
  loginData = {
    email: '',
    password: ''
  };
  data : any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public authService: AuthServiceProvider,
              public loadCtrl: LoadingController,
              private toastCtrl: ToastController
             ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {    
      this.authService.login(this.loginData).then((result) => {
      this.data = result;
      localStorage.setItem('token', this.data.access_token);
      console.log("ini tokennya",this.data.access_token)
      this.navCtrl.setRoot('SetelahloginPage');
    }, (err) => {
      console.log(err);
    });;
    }

  registerPage() {
    this.navCtrl.push('RegisterPage');
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

  // showLoader() {
  //   this.loading = this.loadCtrl.create({
  //     content: 'memuat..'
  //   });

  //   this.loading.present();
  // }

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
