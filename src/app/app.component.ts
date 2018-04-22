import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
import {SetelahloginPage} from '../pages/setelahlogin/setelahlogin';
import {SearchPage} from '../pages/search/search';
import {FilterPage} from '../pages/filter/filter';
import {ProfilPage} from '../pages/profil/profil';
import {RegisterPage}from '../pages/register/register';
import {KebutuhaneventPage}from '../pages/kebutuhanevent/kebutuhanevent';
import {EventPage}from '../pages/event/event'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

