import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import{AuthServiceProvider} from '../../providers/auth-service';
import { EventProvider } from '../../providers/event';


@IonicPage()
@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {
  data:any;
  nama:any;
  event:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private storage : Storage,public authService: AuthServiceProvider,public eventProv : EventProvider) {
    // this.loadProfile();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPage');
  }
loadProfile()
{
  this.authService.getData().then((datas)=>{          //load data user mes
    this.data=datas;
    this.nama=this.data.events[0].name;
    console.log("data profil",this.data);
    console.log("profil",this.data.events[0].name);
  })

  this.eventProv.getEventIdUser().then((hasil)=>{       //ngambil event id mes
    this.event=hasil;
    console.log("event by user", this.event);
  })
}
  goProfileMore()
  {
    this.navCtrl.push('ProfilMorePage');
  }
  ionViewWillEnter()
  {
    this.loadProfile();
  }
}
