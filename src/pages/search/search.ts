import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { EventProvider } from '../../providers/event';

import { SearchPipe } from '../../pipes/search/search';
import { DateConvertPipe } from './../../pipes/date-convert/date-convert';

import { DomSanitizer } from '@angular/platform-browser';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  event : any;
  events : any;
  anu : any;
  allEvent: any;
  apaan : string;
  modifdata : any;
  filterData : any;
  dataTanggal : any = [];
  tanggal : any;
  tanggalCut:any = [];
  eventsArray:any = [];
  showEvent : any = [];
  eventFiltered : any = [];
  rentang : boolean
  queryText: any;



  listEventFilter : any = [];
  listEventDateFilter : any = [];
  tempArray : any = [];

  loading : any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public eventProv:EventProvider, private sanitizer : DomSanitizer, 
              private loadCtrl : LoadingController, private toastCtrl : ToastController,
              private dateConvert : DateConvertPipe) {}

  ionViewWillEnter() {
    this.loadEvent();
    this.listEventFilter = this.navParams.get('listEventFilter'); //ngambil data filter dari halaman filter
    this.listEventDateFilter = this.navParams.get('listEventDateFilter'); //ngambil data tanggal dari range di halaman filter, index 0 angka paling bawah,index 1 yang tinggi
    // this.rentang = this.navParams.get('rentang');
    console.log(this.listEventDateFilter);
    this.eventsArray = [];
    console.log("filter data", this.listEventFilter);
  }

  ionViewWillLeave(){
    this.listEventFilter = [];
  }

  loadEvent() {
    this.showLoader('memuat...');
    this.eventProv.getAllEvent().then((event)=>{
      let temp : any = event;
      this.allEvent = temp.json();
      this.tempArray = this.allEvent.events;
      console.log('list event filter', this.listEventFilter);
      if(this.listEventFilter || this.listEventDateFilter) {
        this.tempArray.forEach(element => {
          let eventMonth = Number(this.dateConvert.transform(element.date_event, 'justBulan'));
          console.log(eventMonth);
          if(eventMonth >= this.listEventDateFilter.lower && eventMonth <= this.listEventDateFilter.upper) {
            this.eventsArray.push(element);
            if(this.listEventFilter.length != 0) {
              if(this.listEventFilter.indexOf(element.categoryevent.name) != -1) {
                console.log('Ada');
                this.eventsArray.pop(element);
                this.eventsArray.push(element);
              } else {
                this.eventsArray.pop(element);
                console.log('Bukan ' + this.listEventFilter);
              }
            }
          } else {
            console.log('Tidak ada Event');
          }
        });
      } else {
        this.eventsArray = this.tempArray;
      }
      console.log('Ini event', this.eventsArray);
      this.loading.dismiss();
    });
    
  }

  makeTrustedImage(item) {
    const imageString =  JSON.stringify(item).replace(/\\n/g, '');
    const style = 'url(' + imageString + ')';
    return this.sanitizer.bypassSecurityTrustStyle(style);
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
  
  filter() {
    this.navCtrl.push('FilterPage');
  }

  lihatEvent(listEvent) {
    this.navCtrl.push('EventPage',listEvent);
  }

}
