import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import{AuthServiceProvider} from '../../providers/auth-service';


@IonicPage()
@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {
  data:any;
  nama:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private storage : Storage,public authService: AuthServiceProvider,) {
    this.loadProfile();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPage');
  }
loadProfile()
{
  this.authService.getData().then((datas)=>{
    this.data=datas;
    this.nama=this.data.events[0].name;
    console.log("data profil",this.data);
    console.log("profil",this.data.events[0].name);
  })
}
  goProfileMore()
  {
    this.navCtrl.push('ProfilMorePage');
  }
}
