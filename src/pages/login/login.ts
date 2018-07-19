import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AuthServiceProvider } from './../../providers/auth-service';

import { UserOptions } from '../../interfaces/user-options';
import { NgForm } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  loginProp: UserOptions = { 
    email: '', 
    password: '',
  };

  userData: any = [];

  submitted = false;
  status = "password";
  look = true;

  token: any;
  
  loading: any;
  data : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthServiceProvider,
              public loadCtrl: LoadingController, private toastCtrl: ToastController, public storage : Storage) {}
  
  registerPage() {
    this.navCtrl.push('RegisterPage');
  }

  onLogin(form: NgForm) {
      this.showLoader();
      this.submitted = true;
      if(form.valid) {
        this.authService.login(this.loginProp).then((result) => {
          this.token = localStorage.getItem('token');
          this.getUserData(this.token);
          this.navCtrl.setRoot('TabsPage');
          this.loading.dismiss();
          }, (err) => {
            this.presentToast("Username atau Password tidak valid");
            console.log(err);
            this.loading.dismiss();
        });
      } else {
        this.loading.dismiss();
        this.presentToast("Form belum terisi");
    }
  }

  getUserData(token) {
    this.authService.getUserData(token).then((data) => {
      let temp: any = data;
      this.userData = temp.json().events;
      localStorage.setItem('userID', this.userData[0]._id);
      localStorage.setItem('userName', this.userData[0].name);
    });
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
}
