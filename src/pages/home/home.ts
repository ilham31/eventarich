import { Component } from '@angular/core';
import { App, NavController, MenuController, IonicPage } from 'ionic-angular';

import { AuthServiceProvider } from '../../providers/auth-service';
import { EventProvider } from '../../providers/event';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  variable: boolean;
  event : any;

  token : any = localStorage.getItem('token');

  constructor(public navCtrl: NavController,
              public menuCtrl : MenuController,
              public auth: AuthServiceProvider,
              public eventProv : EventProvider ) {

    this.auth.hasLoggedIn().then((value) => {
      if(value) {
        this.variable = true;
      } else {
        this.variable = false;
      }
    });
    this.loadEvent();

  }

  loadEvent() {
    this.eventProv.getAllEvent().then((data)=>{
      let temp: any = data;
      this.event = temp.json();
      console.log("event semua",this.event);
    });
  }

  addEvent() {
    this.navCtrl.push('TambaheventPage')
  }

  login(){
    this.navCtrl.push('LoginPage');
    this.menuCtrl.close();
  }

  searchPage() {
    this.navCtrl.push('SearchPage');
  }

  lihatEvent() {
    this.navCtrl.push('EventPage');
  }
  vendorKami() {
    this.navCtrl.push('VendorkamiPage');
  }
  
  lihatProfil() {
    this.navCtrl.push('EditprofilePage');
  }

}