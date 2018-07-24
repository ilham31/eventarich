import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Events, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import{ AuthServiceProvider } from '../../providers/auth-service';
import { EventProvider } from '../../providers/event';


@IonicPage()
@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {
  token: any;
  namaUser:any;

  listEventUser: any = [];
  rawObject : any;
  eventId:any;

  tanggalEvent : any;
  tahun:any;
  bulan:any;
  hari:any;
  date:any=[];

  eventArrayStatus: any;
  successStatus: any;
  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private storage : Storage, public authService: AuthServiceProvider,
              public eventProv : EventProvider, public alertCtrl : AlertController,
              private events : Events, private loadCtrl : LoadingController) {
    this.showLoader();
    this.loadProfile();
    this.token = localStorage.getItem('token');
    this.loadUserEvent(this.token);
  }

  ionViewDidLoad(){
  }

  // Load data User
  loadProfile() {
    this.namaUser = localStorage.getItem('userName');
  }

  checkArray() {
    if(this.listEventUser <= 0) {
      this.eventArrayStatus = true;
    } else {
      this.eventArrayStatus = false;
    }
  }

  // Load user yang sudah dibuat event
  loadUserEvent(token) {
    this.eventProv.getEventIdUser(token).then((data)=>{
      let temp : any = data;
      this.rawObject = temp.json();
      this.listEventUser = this.rawObject.events;
      for(var i=0; i<this.listEventUser.length; i++) {
        console.log(this.listEventUser[i].date_event);
        this.tanggalEvent=this.listEventUser[i].date_event.split("-");
        this.tahun=this.tanggalEvent[0];
        this.bulan=this.tanggalEvent[1];
        this.hari=this.tanggalEvent[2].substring(0,2);
        this.date={
          tanggal:this.hari,
          bulan:this.bulan,
          tahun:this.tahun
        }
      }

      this.checkArray();
      this.loading.dismiss();
      console.log('Status array', this.eventArrayStatus);
    });
  }

  deleteEventId(eventId) {
    this.showLoader();
    this.eventProv.deleteEvent(this.token, eventId).then((data)=> {
      this.events.publish('event:updated', true);
      this.loadUserEvent(this.token);
      this.loading.dismiss();
      this.checkArray();
      this.alertSuccess();
    });
  }

  showLoader() {
    this.loading = this.loadCtrl.create({
      content: 'memuat..'
    });

    this.loading.present();
  }

  alertSuccess() {
    let alert = this.alertCtrl.create({
      subTitle: 'Event Anda sudah terhapus',
      buttons: ['Oke']
    });
    alert.present();
  }

  goProfileMore() {
    this.navCtrl.push('ProfilMorePage');
  }
}
