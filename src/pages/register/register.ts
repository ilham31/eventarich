import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

import { AuthServiceProvider } from '../../providers/auth-service';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  submitted = false;
  status = "password";
  look = true;

  loading: any;
  registerData = {
    email: '',
    username: '',
    address: '',
    phone_number: '',
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
    console.log('ionViewDidLoad RegisterPage');
  }
  // doSignup() {
  //   let regData = [{ 
  //     email:this.email, 
  //     password:this.password,
  //     username:this.username,
  //     address:this.address,
  //     phone_number:this.phone_number }];

  //   console.log(this.email,this.password);
  //   console.log(regData);
  //   this.authService.addUser(regData).then((result) => {
  //     this.navCtrl.pop();
  //     console.log(result,regData);
  //   }, (err) => {
  //     console.log(err);
  //   });
  // }

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
