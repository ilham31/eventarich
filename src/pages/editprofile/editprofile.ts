import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ActionSheetController, ToastController, Platform, LoadingController, Loading } from 'ionic-angular';
import { Camera,CameraOptions } from '@ionic-native/camera';
import { NgForm } from '@angular/forms';
import { AuthServiceProvider } from './../../providers/auth-service';


/**
 * Generated class for the EditprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html',
})
export class EditprofilePage {

  image : string;
  submitted = false;
  email: string;
  username: string;
  address: string;
  phone_number: number;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private camera: Camera,
    public actionSheetCtrl: ActionSheetController, 
    public toastCtrl: ToastController, 
    public platform: Platform, 
    public loadingCtrl: LoadingController,
    public authService: AuthServiceProvider,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditprofilePage');
  }

  upload() {
    
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
  edit(form : NgForm)
  {
    this.submitted=true;
    if(form.valid)
    {
      console.log(this.image,this.email,this.username,this.phone_number,this.address);
    }
    else
    {
      console.log("form");
    }
  }

}
