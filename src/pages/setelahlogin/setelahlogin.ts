import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventProvider } from '../../providers/event';
import { AuthServiceProvider } from '../../providers/auth-service';


@IonicPage()
@Component({
  selector: 'page-setelahlogin',
  templateUrl: 'setelahlogin.html',
})

export class SetelahloginPage {
  // isLoggedIn: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public eventProv : EventProvider, public auth : AuthServiceProvider) {
                this.auth.hasLoggedIn().then((value) => {
                  if(value) {
                    this.variable = true;
                  } else {
                    this.variable = false;
                  }
                });
              }

  variable: boolean;
  event : any;
  eventsArray : any=[];

  ionViewDidLoad(){
    this.loadEvent();
  }

  loadEvent() {
    this.eventProv.getAllEvent().then((data)=>{
      let temp: any = data;
      this.event = temp.json();
      this.eventsArray = this.event.events;
      console.log("Event", this.eventsArray);
      // console.log("event array",this.eventsArray);
    });
  }

  searchPage()
  {
    this.navCtrl.push('SearchPage');
  }
  
  addEvent()
  {
      this.navCtrl.push('TambaheventPage');
  }

  lihatEvent(){
    this.navCtrl.push('EventPage');
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
