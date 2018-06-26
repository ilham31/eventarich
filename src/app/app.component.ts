import { Component, ViewChild,OnInit } from '@angular/core';
import { IonicPage,Platform, NavController, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { AuthServiceProvider } from '../providers/auth-service'

export interface PageInterface {
  title: string;
  pageName: string;
  color: string;
  index?: number;
  icon: string;
}

@Component({
  templateUrl: 'app.html'
})


export class MyApp {
  
  loggedIn: boolean = false;
  vendorPage = 'VendorkamiPage';
  val : any;
  orderPage = 'OrderlogistikPage';
  // homePage = HomePage;
  // loginPage = LoginPage;
  // tabsPage = TabsPage;
  

  rootPage:any = 'HomePage';
  @ViewChild('nav') nav: Nav; 
  

1
  pagesNotLoggedIn: PageInterface[] = [
    { title: 'Home', pageName: 'HomePage', color: 'eventarich', index: 0, icon: 'home'},
    { title: 'Vendor Kami', pageName: 'VendorkamiPage', color: 'eventarich', index: 1, icon: 'body'},
    { title: 'Login', pageName: 'LoginPage', color: 'eventarich', index: 2, icon: 'person'},
  ];

  pagesLoggedIn: PageInterface[] = [
    { title: 'Home', pageName: 'SetelahloginPage', color: 'eventarich', index: 0, icon: 'home'},
    { title: 'Kebutuhan Event', pageName: 'PesananPage', color: 'eventarich', index: 1, icon: 'cube'},
    { title: 'Vendor Kami', pageName: 'VendorkamiPage', color: 'eventarich', index: 2, icon: 'body'},
    { title: 'Profil', pageName: 'ProfilPage', color: 'eventarich', index: 3, icon: 'person'},
  ];


//   ionViewWillEnter(){
//     console.log("nilai token :",localStorage.getItem("token"))
//     if(localStorage.getItem("token") !== null && localStorage.getItem("token") !== ""){
//       console.log("sudah login");
//       this.isLoggedIn=true;
//     }
//     else{
//       console.log("belum login")
//       this.isLoggedIn=false;
//     }
// }


// ionViewDidLoad() {
//   console.log("nilai token :",localStorage.getItem("token"))
//     if(localStorage.getItem("token") !== null && localStorage.getItem("token") !== ""){
//       console.log("sudah login");
//       this.isLoggedIn=true;
//     }
//     else{
//       console.log("belum login")
//       this.isLoggedIn=false;
//     }
// }
  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen,
              public menuCtrl: MenuController,
            private storage : Storage,public authservice : AuthServiceProvider) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      this.storage.get("token").then((val)=>{
        if(this.val !== null && this.val !== "")
        {
            this.loggedIn = true;
            console.log(this.loggedIn,this.val);
        }
      })
      
      // this.authservice.isLogin().then((value) => {
      //   if(value) {
      //     this.loggedIn = true;
      //   } else {
      //     this.loggedIn = false;
      //   }

      //   console.log(this.loggedIn); 
      // });
     
     
      // this.storage.get("token").then((val)=>{
      //     if(val !== null && val !== ""){
      //     this.isLoggedIn =true;
      //     console.log("sudah login, token :",val)
      //     }
      //     else{
      //       console.log("belum login");
      //     }
      })
            
  
    
  }
  
  openPage(page: PageInterface) {

    if((page.pageName == this.vendorPage) || (page.pageName == this.orderPage)) {
      this.nav.push(page.pageName);
      this.menuCtrl.close();  
    } else {
      this.nav.setRoot(page.pageName);
      this.menuCtrl.close();
    }
  }


  // onLoad(page: any) {
  //   this.nav.setRoot(page);
  //   this.menuCtrl.close();  
  // }

  // vendor() {
  //   this.nav.push(VendorkamiPage);
  //   this.menuCtrl.close();  
  // }
}

