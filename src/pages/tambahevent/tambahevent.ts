import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ActionSheetController, ToastController, Platform, LoadingController, Loading  } from 'ionic-angular';
import { Camera,CameraOptions } from '@ionic-native/camera';
import { NgForm } from '@angular/forms';
import { AuthServiceProvider } from './../../providers/auth-service';

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
  myDate : string = '';
  kota : string ='';
  deskripsiEvent : string ='';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private camera: Camera, 
    public actionSheetCtrl: ActionSheetController, 
    public toastCtrl: ToastController, 
    public platform: Platform, 
    public loadingCtrl: LoadingController,
    public authService: AuthServiceProvider,
 ) {

  }

  uploadPicture() {
    
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Pilihan',
      buttons: [
        {
          text: 'Ambil Gambar Baru',
          role: 'ambilGambar',
          handler: () => {
            this.takePicture();
          }
        },
        {
          text: 'Pilih Dari Galleri',
          role: 'gallery',
          handler: () => {
            this.getPhotoFromGallery();
          }
        }
      ]
    });
    actionSheet.present();
  }


  async takePicture(){
    try {
      const options : CameraOptions = {
        quality: 50, //to reduce img size
        targetHeight: 600,
        targetWidth: 600,
        destinationType: this.camera.DestinationType.DATA_URL, //to make it base64 image
        encodingType: this.camera.EncodingType.JPEG,
        mediaType:this.camera.MediaType.PICTURE,
        correctOrientation: true
      }

      const result =  await this.camera.getPicture(options);

      this.image = 'data:image/jpeg;base64,' + result;

     
      


    }
    catch (e) {
      console.error(e);
      alert("error");
    }

  }

  getPhotoFromGallery(){
    this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        sourceType     : this.camera.PictureSourceType.PHOTOLIBRARY,
        targetWidth: 600,
        targetHeight: 600
    }).then((imageData) => {
      // this.base64Image = imageData;
      // this.uploadFoto();
      this.image = 'data:image/jpeg;base64,' + imageData;
      
  //     // const picture = storage().ref('picture/profileDonatur/'+ this.id_donatur);
  //     // picture.putString(this.image, 'data_url');
      
  //     // storage().ref().child('picture/profileDonatur/'+ this.id_donatur).getDownloadURL().then(url =>{
  //     //   // ini kedata base
  //     //   this.db.object('/donatur/'+ this.id_donatur).update({
  //     //   image: url })
  //     // })

      }, (err) => {
         alert("error");
        
    });
  }
  addEvent( form : NgForm)
  {
    this.submitted=true;
    if(form.valid)
    {
      console.log(this.image,this.eventName,this.kota,this.deskripsiEvent,this.myDate)
    }
    else
    {
      console.log("form isi dulu")
    }
  }


  //   public presentActionSheet() {
//     let actionSheet = this.actionSheetCtrl.create({
//       title: 'Select Image Source',
//       buttons: [
//         {
//           text: 'Load from Library',
//           handler: () => {
//             this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
//           }
//         },
//         {
//           text: 'Use Camera',
//           handler: () => {
//             this.takePicture(this.camera.PictureSourceType.CAMERA);
//           }
//         },
//         {
//           text: 'Cancel',
//           role: 'cancel'
//         }
//       ]
//     });
//     actionSheet.present();
//   }

//   public takePicture(sourceType) {
//     // Create options for the Camera Dialog
//     var options = {
//       quality: 100,
//       sourceType: sourceType,
//       saveToPhotoAlbum: false,
//       correctOrientation: true
//     };
   
//     // Get the data of an image
//     this.camera.getPicture(options).then((imagePath) => {
//       // Special handling for Android library
//       if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
//         this.filePath.resolveNativePath(imagePath)
//           .then(filePath => {
//             let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
//             let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
//             this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
//           });
//       } else {
//         var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
//         var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
//         this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
//       }
//     }, (err) => {
//       this.presentToast('Error while selecting image.');
//     });
//   }

//   // Create a new name for the image
// private createFileName() {
//   var d = new Date(),
//   n = d.getTime(),
//   newFileName =  n + ".jpg";
//   return newFileName;
// }
 
// // Copy the image to a local folder
// private copyFileToLocalDir(namePath, currentName, newFileName) {
//   this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
//     this.lastImage = newFileName;
//   }, error => {
//     this.presentToast('Error while storing file.');
//   });
// }
 
// private presentToast(text) {
//   let toast = this.toastCtrl.create({
//     message: text,
//     duration: 3000,
//     position: 'top'
//   });
//   toast.present();
// }
 
// // Always get the accurate path to your apps folder
// public pathForImage(img) {
//   if (img === null) {
//     return '';
//   } else {
//     return cordova.file.dataDirectory + img;
//   }
// }

// public uploadImage() {
//   // Destination URL
//   var url = "http://yoururl/upload.php";
 
//   // File for Upload
//   var targetPath = this.pathForImage(this.lastImage);
 
//   // File name only
//   var filename = this.lastImage;
 
//   var options = {
//     fileKey: "file",
//     fileName: filename,
//     chunkedMode: false,
//     mimeType: "multipart/form-data",
//     params : {'fileName': filename}
//   };
 
//   const fileTransfer: TransferObject = this.transfer.create();
 
//   this.loading = this.loadingCtrl.create({
//     content: 'Uploading...',
//   });
//   this.loading.present();
 
//   // Use the FileTransfer to upload the image
//   fileTransfer.upload(targetPath, url, options).then(data => {
//     this.loading.dismissAll()
//     this.presentToast('Image succesful uploaded.');
//   }, err => {
//     this.loading.dismissAll()
//     this.presentToast('Error while uploading file.');
//   });
// }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TambaheventPage');
  }

}
