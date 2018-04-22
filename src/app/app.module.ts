import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage} from'../pages/login/login';
import {SetelahloginPage} from '../pages/setelahlogin/setelahlogin';
import {SearchPage} from '../pages/search/search';
import {FilterPage} from '../pages/filter/filter';
import {ProfilPage} from '../pages/profil/profil';
import {RegisterPage}from '../pages/register/register';
import {KebutuhaneventPage}from '../pages/kebutuhanevent/kebutuhanevent';
import {EventPage}from '../pages/event/event';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SetelahloginPage,
    SearchPage,
    FilterPage,
    ProfilPage,
    RegisterPage,
    KebutuhaneventPage,
    EventPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SetelahloginPage,
    SearchPage,
    FilterPage,
    ProfilPage,
    RegisterPage,
    KebutuhaneventPage,
    EventPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
