import { Component } from '@angular/core';
import { App, NavController, MenuController, IonicPage } from 'ionic-angular';

import { AuthServiceProvider } from '../../providers/auth-service';
import { EventProvider } from '../../providers/event';

import { DateConvertPipe } from '../../pipes/date-convert/date-convert';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  coba: any = 'wa';

  variable: boolean;
  event : any;
  eventsArray : any=[];
  token : any = localStorage.getItem('token');

  tanggalEvent: any;
  arrayTanggalEvent: any;
  tahun: any;
  bulan: any;
  hari: any;
  

  constructor(public navCtrl: NavController, public menuCtrl : MenuController,
              public auth: AuthServiceProvider, public eventProv : EventProvider ) {
    
              this.auth.hasLoggedIn().then((value) => {
                if(value) {
                  this.variable = true;
                } else {
                  this.variable = false;
                }
              });
  }

  ionViewDidLoad(){
    this.loadEvent();
  }

  loadEvent() {
    this.eventProv.getAllEvent().then((data)=>{
      let temp: any = data;
      this.event = temp.json();
      this.eventsArray = this.event.events;
      this.splitDate();
      console.log("Event", this.eventsArray);
      // console.log("event array",this.eventsArray);
    });
  }

  splitDate() {
    for(var i=0; i < this.eventsArray.length; i++) {
      this.tanggalEvent = this.eventsArray[i].date_event.split("-");
      this.bulan = this.tanggalEvent[1];
      this.hari = this.tanggalEvent[2].substring(0,2);
      this.arrayTanggalEvent = {
        bulan: this.bulan,
        hari: this.hari
      }
    }
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

  lihatEvent(listEvent) {
    this.navCtrl.push('EventPage', listEvent);
  }
  
  vendorKami() {
    this.navCtrl.push('VendorkamiPage');
  }
  
  lihatProfil() {
    this.navCtrl.push('EditprofilePage');
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      this.loadEvent();
      refresher.complete();
    }, 2000);
  }

}