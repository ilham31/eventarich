import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ActionSheetController, ToastController, Platform, LoadingController, Loading, AlertController, Events  } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { NgForm } from '@angular/forms';
import { AuthServiceProvider } from './../../providers/auth-service';
import { EventProvider } from '../../providers/event';

import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';

@IonicPage()
@Component({
  selector: 'page-tambahevent',
  templateUrl: 'tambahevent.html',
})
export class TambaheventPage {

  lastImage: string = null;
  loading: Loading;
  image : string;

  submitted = false;
  eventName : string = '';
  myDate = new Date().toISOString.toString();
  kota : string ='';
  deskripsiEvent : string ='';
  base64Image : string;
  imageUp : any;

  
  data:any;
  selectedLeave : any;
  token: any = localStorage.getItem('token');


  constructor(public navCtrl: NavController, public navParams: NavParams,
              private camera: Camera, public actionSheetCtrl: ActionSheetController, 
              public toastCtrl: ToastController, public platform: Platform, 
              public loadCtrl: LoadingController, public eventprov: EventProvider,
              private alertCtrl : AlertController, private events : Events,
              private transfer: FileTransfer, private file: File) {}

  addEvent(form : NgForm) {
    console.log("selectedleave",this.selectedLeave);
    this.showLoader();
    this.submitted = true;
    console.log(this.base64Image);
    if(form.valid) {
      let eventData = {
        title:this.eventName,
        date:this.myDate,
        city:this.kota,
        description:this.deskripsiEvent,
        categoryevent:this.selectedLeave,
        event_image: "http://eventarich.codepanda.web.id/" + this.imageUp
      };

      console.log(eventData.date);

      this.eventprov.tambahEvent(eventData, this.token).then((result)=>{
        this.events.publish('event:updated', true);
        this.navCtrl.pop();
        this.loading.dismiss();
        this.alertSuccess();
        console.log("data",result);
      }, (err) => {
        this.loading.dismiss();
        console.log(err);
      });
    } else {
      console.log("form isi dulu")
    }
  }

  openGallery() {
    this.showLoader();
    const options : CameraOptions = {
      quality : 100,
      destinationType : this.camera.DestinationType.DATA_URL,
      encodingType : this.camera.EncodingType.JPEG,
      sourceType : this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      this.imageUp.push(this.base64Image);
      this.imageUp.revese();
      this.loading.dismiss();
     }, (err) => {
      // Handle error
      console.log(err);
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
      subTitle: "Event berhasil dibuat",
      buttons: ['Oke']
    });
    alert.present();
  }
}
