import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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

  isLoggedIn: boolean = true;
  vendorPage = 'VendorkamiPage';
  orderPage = 'OrderlogistikPage';
  // homePage = HomePage;
  // loginPage = LoginPage;
  // tabsPage = TabsPage;

  rootPage:any = 'HomePage';
  @ViewChild('nav') nav: Nav; 

  pagesNotLoggedIn: PageInterface[] = [
    { title: 'Home', pageName: 'HomePage', color: 'eventarich', index: 0, icon: 'home'},
    { title: 'Vendor Kami', pageName: 'VendorkamiPage', color: 'eventarich', index: 1, icon: 'body'},
    { title: 'Login', pageName: 'LoginPage', color: 'eventarich', index: 2, icon: 'person'},
  ];

  pagesLoggedIn: PageInterface[] = [
    { title: 'Home', pageName: 'SetelahloginPage', color: 'eventarich', index: 0, icon: 'home'},
    { title: 'Kebutuhan Event', pageName: 'OrderlogistikPage', color: 'eventarich', index: 1, icon: 'cube'},
    { title: 'Vendor Kami', pageName: 'VendorkamiPage', color: 'eventarich', index: 2, icon: 'body'},
    { title: 'Akun', pageName: 'LoginPage', color: 'eventarich', index: 3, icon: 'person'},
  ];



  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen,
              public menuCtrl: MenuController) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
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

