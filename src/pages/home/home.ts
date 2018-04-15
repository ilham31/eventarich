import { Component } from '@angular/core';
import { App,NavController,MenuController } from 'ionic-angular';
import {LoginPage} from '../login/login';
import {SearchPage} from '../search/search';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public menuCtrl : MenuController) {

  }
  login(){
    this.navCtrl.push(LoginPage);
  }
  searchPage()
  {
    this.navCtrl.push(SearchPage);
  }
  

}
@Component({
  template: `
<ion-header>
  <ion-navbar>
    <button ion-button menuToggle icon-only>
      <ion-icon name='menu'></ion-icon>
    </button>
    <ion-title>
      Menus
    </ion-title>
  </ion-navbar>
</ion-header>
<ion-content padding>
  <button ion-button block menuToggle>Toggle Menu</button>
</ion-content>
`
})
export class BasicPage {
  constructor(app: App, menu: MenuController) {
    menu.enable(true);
  }
}

@Component({
  template: `
<ion-header>
  <ion-navbar>
    <button ion-button menuToggle icon-only>
      <ion-icon name='menu'></ion-icon>
    </button>
    <ion-title>
      Menus
    </ion-title>
  </ion-navbar>
</ion-header>
<ion-content padding>
  <button ion-button block menuToggle>Toggle Menu</button>
</ion-content>
`
})
export class PageOne { }

@Component({
  template: `
<ion-header>
  <ion-navbar>
    <button ion-button menuToggle icon-only>
      <ion-icon name='menu'></ion-icon>
    </button>
    <ion-title>
      Friends
    </ion-title>
  </ion-navbar>
</ion-header>
<ion-content padding>
  <button ion-button block menuToggle>Toggle Menu</button>
</ion-content>
`
})
export class PageTwo { }

@Component({
  template: `
<ion-header>
  <ion-navbar>
    <button ion-button menuToggle icon-only>
      <ion-icon name='menu'></ion-icon>
    </button>
    <ion-title>
      Events
    </ion-title>
  </ion-navbar>
</ion-header>
<ion-content padding>
  <button ion-button block menuToggle>Toggle Menu</button>
</ion-content>
`
})
export class PageThree { }

