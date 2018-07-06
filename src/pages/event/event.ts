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
  dataEvent : any;
  tanggalEvent;
  hari :any;
  bulan : any;
  tahun : any;
  category : any;
  date:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public EventProvider : EventProvider,public authService : AuthServiceProvider) {
    this.loadProfile();
    this.dataEvent=this.navParams.data;
    this.tanggal(this.dataEvent);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventPage');
  }
  tanggal(dataevent)
  {
    console.log("masuk tanggal")
    this.tanggalEvent=dataevent.date_event.split("-");
    this.tahun=this.tanggalEvent[0];
    this.bulan=this.tanggalEvent[1];
    this.hari=this.tanggalEvent[2].substring(0,2);
    this.date={
      tanggal:this.hari,
      bulan:this.bulan,
      tahun:this.tahun
    }
    console.log("date",this.date);
    console.log("tanggal",this.tanggalEvent);
    console.log("data event yang dikirim",this.dataEvent)
    console.log("tanggal",this.hari,this.bulan,this.tahun); 
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
