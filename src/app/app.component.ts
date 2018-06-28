import { Component, ViewChild, OnInit } from '@angular/core';
import { IonicPage, Platform, NavController, MenuController, Nav, Events } from 'ionic-angular';
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
  
  // isLoggedIn: boolean;
  vendorPage = 'VendorkamiPage';
  pesananPage = 'PesananPage';
  profilePage = 'ProfilPage';
  tes:any;
  tabBarElement: any;

  rootPage:any = 'TabsPage';
  @ViewChild('nav') nav: Nav;

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


  constructor(public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen,
              public menuCtrl: MenuController,
              public storage : Storage,
              public auth: AuthServiceProvider,
              public events: Events,
              // public navCtrl: NavController
            ) 
              
  {
    this.initApp();
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');

    this.auth.hasLoggedIn().then((hasLoggedIn) => {
      this.enableMenu(hasLoggedIn === true);
    });

    this.listenToLoginEvents();
    
  }

  ionViewWillEnter(){
    this.tabBarElement.style.display = 'none';
  }

  ionViewWillLeave(){
    this.tabBarElement.style.display = 'flex';
  }


  initApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page: PageInterface) {

    if((page.pageName == this.vendorPage) || (page.pageName == this.pesananPage) || (page.pageName == this.profilePage)) {
      this.nav.push(page.pageName);
      this.menuCtrl.close();  
    } else {
      this.nav.setRoot(page.pageName);
      this.menuCtrl.close();
    }
  }

  enableMenu(loggedIn: boolean) {
    this.menuCtrl.enable(loggedIn, 'loggedInMenu');
    this.menuCtrl.enable(!loggedIn, 'loggedOutMenu');
  }

  listenToLoginEvents() {
    this.events.subscribe('user:login', () => {
      this.enableMenu(true);
    });

    this.events.subscribe('user:logout', () => {
      this.enableMenu(false);
    });
  }
}

