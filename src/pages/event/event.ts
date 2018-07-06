import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SetelahloginPage} from '../setelahlogin/setelahlogin'
import { EventProvider } from '../../providers/event';
import { AuthServiceProvider } from '../../providers/auth-service';

/**
 * Generated class for the EventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {
  token: any = localStorage.getItem("token");
  data:any;
  nama:any;
  getIdUser : any;
  id : any;
  idEvent : any;
  EventId : any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public EventProvider : EventProvider,public authService : AuthServiceProvider) {
    this.loadProfile();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventPage');
  }
  back()
  {
    this.navCtrl.pop();
  }
  
  loadProfile() {
    this.authService.getUserData(this.token).then((data)=> {
      this.data = data;
      this.nama = this.data.events[0].name;
      this.getIdUser = this.data.events[0].userId;
      console.log("data profil",this.data);
      console.log("profil",this.data.events[0].name);
    });
  }
  favouriteEvent(item)
  {
   let favouriteData = {
      id : this.getIdUser,
      idEvent : this.EventId 
   } 
   this.EventProvider.favouriteEvent(favouriteData).then((result)=>{
    console.log(result)
    },(err)=>{
    console.log(err)
   });
  }


}
