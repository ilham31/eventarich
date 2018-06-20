import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

import { AuthServiceProvider } from '../../providers/auth-service';

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

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
   doSignup() {
    let regData = { 
      email:this.email, 
      password:this.password,
      name:this.username,
      address:this.address,
      phone_number:this.phone_number };

    console.log(this.email,this.password);
    console.log(regData);
    this.authService.register(regData).then((result) => {
      this.navCtrl.push('LoginPage');
      console.log(result,regData);
    }, (err) => {
      console.log(err);
    });
      console.log(this.email,this.address)
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

}
