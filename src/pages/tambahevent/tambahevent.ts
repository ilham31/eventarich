import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ActionSheetController, ToastController, Platform, LoadingController, Loading  } from 'ionic-angular';
import { Camera,CameraOptions } from '@ionic-native/camera';
import { NgForm } from '@angular/forms';
import { AuthServiceProvider } from './../../providers/auth-service';
import { EventProvider } from '../../providers/event';

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
  data:any;
  selectedLeave : any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private camera: Camera, 
    public actionSheetCtrl: ActionSheetController, 
    public toastCtrl: ToastController, 
    public platform: Platform, 
    public loadingCtrl: LoadingController,
    public eventprov:EventProvider,
 ) {

  }

  addEvent( form : NgForm) {
    console.log("selectedleave",this.selectedLeave);
    this.submitted=true;
    if(form.valid)
    {
      let eventData = {
        title:this.eventName,
        date:this.myDate,
        city:this.kota,
        description:this.deskripsiEvent,
        categoryevent:this.selectedLeave
      };
      console.log("data",eventData);
      this.eventprov.tambahEvent(eventData).then((result)=>{
      console.log("data",result);

      }, (err) => {
        // this.loading.dismiss();
        console.log(err);
      });

      console.log(this.eventName,this.kota,this.deskripsiEvent,this.myDate)
    }
    else
    {
      console.log("form isi dulu")
    }
  }

  
  // uploadPicture() {
    
  //   let actionSheet = this.actionSheetCtrl.create({
  //     title: 'Pilihan',
  //     buttons: [
  //       {
  //         text: 'Ambil Gambar Baru',
  //         role: 'ambilGambar',
  //         handler: () => {
  //           this.takePicture();
  //         }
  //       },
  //       {
  //         text: 'Pilih Dari Galleri',
  //         role: 'gallery',
  //         handler: () => {
  //           this.getPhotoFromGallery();
  //         }
  //       }
  //     ]
  //   });
  //   actionSheet.present();
  // }


  // async takePicture(){
  //   try {
  //     const options : CameraOptions = {
  //       quality: 50, //to reduce img size
  //       targetHeight: 600,
  //       targetWidth: 600,
  //       destinationType: this.camera.DestinationType.DATA_URL, //to make it base64 image
  //       encodingType: this.camera.EncodingType.JPEG,
  //       mediaType:this.camera.MediaType.PICTURE,
  //       correctOrientation: true
  //     }

  //     const result =  await this.camera.getPicture(options);

  //     this.image = 'data:image/jpeg;base64,' + result;

     
      


  //   }
  //   catch (e) {
  //     console.error(e);
  //     alert("error");
  //   }

  // }

  // getPhotoFromGallery(){
  //   this.camera.getPicture({
  //       destinationType: this.camera.DestinationType.DATA_URL,
  //       sourceType     : this.camera.PictureSourceType.PHOTOLIBRARY,
  //       targetWidth: 600,
  //       targetHeight: 600
  //   }).then((imageData) => {
  //     // this.base64Image = imageData;
  //     // this.uploadFoto();
  //     this.image = 'data:image/jpeg;base64,' + imageData;
      
  // //     // const picture = storage().ref('picture/profileDonatur/'+ this.id_donatur);
  // //     // picture.putString(this.image, 'data_url');
      
  // //     // storage().ref().child('picture/profileDonatur/'+ this.id_donatur).getDownloadURL().then(url =>{
  // //     //   // ini kedata base
  // //     //   this.db.object('/donatur/'+ this.id_donatur).update({
  // //     //   image: url })
  // //     // })

  //     }, (err) => {
  //        alert("error");
        
  //   });
  // }
}
