import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { PhotoViewer } from '@ionic-native/photo-viewer';

import { SetelahloginPage } from '../setelahlogin/setelahlogin';

import { EventProvider } from '../../providers/event';
import { AuthServiceProvider } from '../../providers/auth-service';

import { DateConvertPipe } from './../../pipes/date-convert/date-convert';

@IonicPage()
@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {
  token: any = localStorage.getItem("token");
  data:any;
  eventDetail:any = [];
  getIdUser : any;
  id : any;
  idEvent : any;
  EventId : any;
  dataEvent : any;
  
  category : any;
  date:any;

  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public EventProvider : EventProvider, public authService : AuthServiceProvider,
              private loadCtrl : LoadingController, private sanitizer : DomSanitizer,
              private photoView : PhotoViewer) {
    this.showLoader();
    this.dataEvent = this.navParams.data;
    console.log("Data Event", this.dataEvent);
    this.loading.dismiss();
  }
  
  favouriteEvent(item) {
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
  
  makeTrustedImage(item) {
    const imageString =  JSON.stringify(item).replace(/\\n/g, '');
    const style = 'url(' + imageString + ')';
    return this.sanitizer.bypassSecurityTrustStyle(style);
  }

  viewImage() {
    var options = {
      share: true, // default is false
      closeButton: false, // default is true
      copyToReference: true // default is false
    };

    this.photoView.show(this.dataEvent.event_image_path, 'Event Image', options);
  }

  showLoader() {
    this.loading = this.loadCtrl.create({
      content: 'memuat..'
    });

    this.loading.present();
  }


}
