import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilMorePage } from './profil-more';

@NgModule({
  declarations: [
    ProfilMorePage,
  ],
  imports: [
    IonicPageModule.forChild(ProfilMorePage),
  ],
  exports: [
    ProfilMorePage
  ]
})
export class ProfilMorePageModule {}
