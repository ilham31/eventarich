import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';


import { MyApp } from './app.component';

import { AuthServiceProvider } from '../providers/auth-service';
import { IonicStorageModule } from '@ionic/storage';
import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
// import { ImagePicker } from '@ionic-native/image-picker';
import { Base64 } from '@ionic-native/base64';
import { PhotoViewer } from '@ionic-native/photo-viewer';


import { OrderProvider } from '../providers/order';
import { EventProvider } from '../providers/event';

import { SearchPipe } from './../pipes/search/search';
import { SafeImagePipe } from './../pipes/safe-image/safe-image';


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
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    OrderProvider,
    EventProvider,
    File, FileTransfer,
    // ImagePicker,
    Base64,
    PhotoViewer
  ]
})
export class AppModule {}
