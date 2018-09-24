import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ActionSheetController, ToastController, Platform, LoadingController, Loading, AlertController, Events  } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { NgForm, FormGroup } from '@angular/forms';
import { AuthServiceProvider } from './../../providers/auth-service';
import { EventProvider } from '../../providers/event';

import { File } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
// import { ImagePicker } from '@ionic-native/image-picker';
import { Base64 } from '@ionic-native/base64';


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
 
  imageURI : any = "assets/imgs/contoh.jpg";

  eventData : any = {
    title : '',
    date_event : new Date().toISOString.toString(),
    city : '',
    description : '',
    categoryevent : '',
    event_image_path : ''
  };

  token: any = localStorage.getItem('token');


  constructor(public navCtrl: NavController, public navParams: NavParams,
              public actionSheetCtrl: ActionSheetController, public toastCtrl: ToastController, public platform: Platform, 
              public loadCtrl: LoadingController, public eventprov: EventProvider,
              private alertCtrl : AlertController, private events : Events,
              private camera : Camera, private base64 : Base64) {}

  addEvent(form : NgForm) {
    this.showLoader();
    this.submitted = true;
    if(form.valid) {
      console.log(this.eventData);
      this.eventprov.tambahEvent(this.eventData, this.token).then((result)=>{
        console.log('masuk sini');
        this.events.publish('event:updated', true);
        this.navCtrl.pop();
        this.loading.dismiss();
        this.alertSuccess();
        console.log("data",result);
      }, (err) => {
        this.loading.dismiss();
        this.alertGagal(err._body.message);
        console.log(err);
      });
    } else {
      this.loading.dismiss();
      this.presentToast("Form belum terisi");
    }
  }

  openGallery() {
    this.showLoader();
    const options = {
      quality : 100,
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      destinationType: this.camera.DestinationType.DATA_URL
    }

    this.camera.getPicture(options).then((imageData) => {
      // for(var i = 0; i < imageData.length; i++) {
      //   this.imageURI = imageData[i];
      //   this.base64.encodeFile(imageData[i]).then((base64File : string) => {
      //     this.eventData.event_image_path = base64File;
      //   }, (err) => {
      //     console.log(err);
      //   });
      // }
      this.imageURI = 'data:image/jpeg;base64,' + imageData;
      this.eventData.event_image_path = 'data:image/jpeg;base64,'+imageData;
      this.loading.dismiss();
     }, (err) => {
      this.loading.dismiss();
      console.log(err);
     });
  }

  // fileTransfering() {
  //   const fileTransfer: FileTransferObject = this.transfer.create();
  //   let options: FileUploadOptions = {
  //     fileKey: 'ionicfile',
  //     fileName: 'ionicfile',
  //     chunkedMode: false,
  //     mimeType: "image/jpeg",
  //     headers: {}
  //   }

  //   fileTransfer.upload(this.imageURI, 'http://localhost:3000/events', options).then((data) => {
  //     console.log(data+" Uploaded Successfully");
  //   }, (err) => {
  //     console.log(err);
  //   });

  // }

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

  alertGagal(err) {
    let alert = this.alertCtrl.create({
      subTitle: 'Event gagal dibuat : ' + err,
      buttons: ['Oke']
    });
    alert.present();
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
