import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { PhotoViewer } from '@ionic-native/photo-viewer';

import { SetelahloginPage } from '../setelahlogin/setelahlogin';

import { EventProvider } from '../../providers/event';
import { AuthServiceProvider } from '../../providers/auth-service';

import { DateConvertPipe } from './../../pipes/date-convert/date-convert';
import { BreaklinePipe } from '../../pipes/breakline/breakline';

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
  eventLiked: any = false;
  likesCounter : any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public eventProvider : EventProvider, public authService : AuthServiceProvider,
              private loadCtrl : LoadingController, private sanitizer : DomSanitizer,
              private photoView : PhotoViewer) {
    this.showLoader();
    this.dataEvent = this.navParams.data;
    this.likesCounter = this.navParams.data.likes;
    this.eventLiked = this.eventProvider.hasLiked(this.navParams.data._id);
    this.loading.dismiss();
    // console.log(this.token);
    console.log('daftar like', JSON.parse(localStorage.getItem('likedEvent')));
  }
  

  likeEvent(eventId) {
    if(this.eventProvider.hasLiked(eventId)) {
      this.eventLiked = true;
      console.log('Udah di like')
    } else {
      this.eventProvider.likeEvent(this.token, eventId).then((res)=> {
        this.eventLiked = true;
        this.likesCounter = this.likesCounter + 1;
        this.eventProvider.addLiked(eventId);
        this.addNewLikedEvent(eventId);
      });
      console.log('Dilike');
    }
  }
  
  makeTrustedImage(item) {
    const imageString =  JSON.stringify(item).replace(/\\n/g, '');
    const style = 'url(' + imageString + ')';
    return this.sanitizer.bypassSecurityTrustStyle(style);
  }

  addNewLikedEvent(eventId) {
    var temp = JSON.parse(localStorage.getItem('likedEvent')) || [];
    temp.push(eventId);
    localStorage.setItem('likedEvent', JSON.stringify(temp));
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
