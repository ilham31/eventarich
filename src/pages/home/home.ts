import { Component } from '@angular/core';
import { App, NavController, MenuController, IonicPage } from 'ionic-angular';

import { AuthServiceProvider } from '../../providers/auth-service';
import { EventProvider } from '../../providers/event/event';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  variable: boolean;
  event : any;
  constructor(public navCtrl: NavController,
              public menuCtrl : MenuController,
              public auth: AuthServiceProvider,
              public eventProv : EventProvider,
              ) 
  {

    this.auth.hasLoggedIn().then((value) => {
      if(value) {
        this.variable = true;
      } else {
        this.variable = false;
      }
    });
    this.loadEvent();
  }

  loadEvent()
  {
    this.eventProv.getAllEvent().then((event)=>{
      this.event=event;
      console.log("event semua",this.event);
    })
  }
  addEvent()
  {
    this.navCtrl.push('TambaheventPage')
  }
  login(){
    this.navCtrl.push('LoginPage');
    this.menuCtrl.close();
  }
  searchPage()
  {
    this.navCtrl.push('SearchPage');
  }
  lihatEvent(){
    this.navCtrl.push('EventPage');
  }
  vendorkami()
  {
    this.navCtrl.push('VendorkamiPage');
  }
  lihatprofil()
  {
    this.navCtrl.push('EditprofilePage');
  }
  oderlogistik()
  {
    this.navCtrl.push('OrderlogistikPage');
  }

}