import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import{ AuthServiceProvider } from '../../providers/auth-service';
import { EventProvider } from '../../providers/event';


@IonicPage()
@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {
  token: any = localStorage.getItem("token");
  data:any;
  nama:any;
  dataEvent : any;
  event:any;
  tanggalEvent : any;
  tahun:any;
  bulan:any;
  hari:any;
  date:any=[]
  constructor(public navCtrl: NavController, public navParams: NavParams,private storage : Storage,public authService: AuthServiceProvider,public eventProv : EventProvider) {
    this.loadProfile();
    this.loadUserEvent();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPage');
  }

  // Load data User
  loadProfile() {
    this.authService.getUserData(this.token).then((data)=> {
      let temp: any = data;
      this.data = temp.json();
      this.nama = this.data.events[0].name;
      console.log("data profil",this.data);
      console.log("profil",this.data.events[0].name);
    });
  }

  // Load user yang sudah dibuat event
  loadUserEvent() {
    this.eventProv.getEventIdUser(this.token).then((data)=>{
      let temp: any = data;
      this.event = temp.json();
      this.dataEvent =this.event.events;
      
      console.log("event by user", this.event);
      console.log("data event",this.dataEvent);
    });
  }

  goProfileMore() {
    this.navCtrl.push('ProfilMorePage');
  }
}
