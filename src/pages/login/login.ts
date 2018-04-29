import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SetelahloginPage} from '../setelahlogin/setelahlogin';
import {RegisterPage} from '../register/register';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  homePage = HomePage;

  submitted = false;
  status = "password";
  look = true;

  token: string;
  
  email: string;
  password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  // loginNow()
  // {
  //   this.navCtrl.setRoot(SetelahloginPage);
  // }
  registerPage()
  {
    this.navCtrl.push(RegisterPage);
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

  loginNow() {
    this.navCtrl.setRoot(HomePage);
  }
}
