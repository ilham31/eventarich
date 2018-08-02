import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, MenuController } from 'ionic-angular';
import { EventProvider } from '../../providers/event';
import { AuthServiceProvider } from '../../providers/auth-service';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeImagePipe } from './../../pipes/safe-image/safe-image';


@IonicPage()
@Component({
  selector: 'page-setelahlogin',
  templateUrl: 'setelahlogin.html',
})

export class SetelahloginPage {
  variable: boolean;
  event : any;
  eventsArray : any=[];
  token : any = localStorage.getItem('token');

  tanggalEvent: any;
  arrayTanggalEvent: any;
  tahun: any;
  bulan: any;
  hari: any;

  loading : any;
  

  constructor(public navCtrl: NavController, public menuCtrl : MenuController,
              public auth: AuthServiceProvider, public eventProv : EventProvider,
              private sanitizer : DomSanitizer, private loadCtrl : LoadingController,
              private toastCtrl : ToastController ) {
    
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
    this.showLoader('memuat...');
    this.eventProv.getAllEvent().then((data)=>{
      let temp: any = data;
      this.event = temp.json();
      this.eventsArray = this.event.events;
      console.log("Event", this.eventsArray);
      this.loading.dismiss();
    }, (err) => {
      this.presentToast('Anda tidak terhubung Internet');
      this.loading.dismiss();
    });
  }

  makeTrustedImage(item) {
    const imageString =  JSON.stringify(item).replace(/\\n/g, '');
    const style = 'url(' + imageString + ')';
    return this.sanitizer.bypassSecurityTrustStyle(style);
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

  showLoader(content) {
    this.loading = this.loadCtrl.create({
      content: content
    });

    this.loading.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });
    
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
 
}
