import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';


import { MyApp } from './app.component';
// import { HomePage } from '../pages/home/home';
// import { LoginPage } from'../pages/login/login';
// import { SetelahloginPage } from '../pages/setelahlogin/setelahlogin';
// import { SearchPage } from '../pages/search/search';
// import { FilterPage } from '../pages/filter/filter';
// import { ProfilPage } from '../pages/profil/profil';
// import { RegisterPage }from '../pages/register/register';
// import { KebutuhaneventPage }from '../pages/kebutuhanevent/kebutuhanevent';
// import { EventPage } from '../pages/event/event';
// import { TambaheventPage }from '../pages/tambahevent/tambahevent';
// import { VendorkamiPage }from '../pages/vendorkami/vendorkami';

 import { AuthServiceProvider } from '../providers/auth-service';
 import { IonicStorageModule } from '@ionic/storage';
 import { File } from '@ionic-native/file';
 import { Transfer } from '@ionic-native/transfer';
 import { FilePath } from '@ionic-native/file-path';
 import { Camera } from '@ionic-native/camera';
// import { TabsPage } from '../pages/tabs/tabs';
// import { TopeventPage } from '../pages/topevent/topevent';
// import { EditprofilePage } from '../pages/editprofile/editprofile';
// import { OrderlogistikPage } from '../pages/orderlogistik/orderlogistik';


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,HttpModule,HttpClientModule, 
    IonicModule.forRoot(MyApp,{tabsHideOnSubPages: true}),
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['sqlite', 'websql', 'indexeddb']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    File,
    Transfer,
    Camera,
    FilePath,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
  ]
})
export class AppModule {}
