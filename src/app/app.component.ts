import { Component, ViewChild,OnInit } from '@angular/core';
import { IonicPage,Platform, NavController, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { AuthServiceProvider } from '../providers/auth-service';


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
  
  isLoggedIn: boolean;
  vendorPage = 'VendorkamiPage';
  pesananPage = 'PesananPage';
  profilePage = 'ProfilPage';
  tes:any;
  // homePage = HomePage;
  // loginPage = LoginPage;
  // tabsPage = TabsPage;
  

  rootPage:any = 'HomePage';
  @ViewChild('nav') nav: Nav;

  constructor(public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen,
              public menuCtrl: MenuController,
              private storage : Storage,
              public auth: AuthServiceProvider) 
              
  {
    this.initApp();


  }

  initApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    this.auth.isLogin().then((value) => {
      console.log(value);
      if(value) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  }
  
  
  // ngOnInit(){
  //   //called after the constructor and called  after the first ngOnChanges() 
  //   this.storage.get('token').then((val) => {
  //     if(val !== null && val !== ""){
  //       this.isLoggedIn =true;
  //       console.log("sudah login, token :",val)
  //     }
  //     else 
  //     {
  //       this.isLoggedIn=false
  //       console.log("belum login")
  //     }  
  //   });
    
  // }


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


  openPage(page: PageInterface) {

    if((page.pageName == this.vendorPage) || (page.pageName == this.pesananPage) || (page.pageName == this.profilePage)) {
      this.nav.push(page.pageName);
      this.menuCtrl.close();  
    } else {
      this.nav.setRoot(page.pageName);
      this.menuCtrl.close();
    }
  }
}

