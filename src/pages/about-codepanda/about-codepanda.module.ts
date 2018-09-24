import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutCodepandaPage } from './about-codepanda';

@NgModule({
  declarations: [
    AboutCodepandaPage,
  ],
  imports: [
    IonicPageModule.forChild(AboutCodepandaPage),
  ],

  exports : [
    AboutCodepandaPage
  ]
})
export class AboutCodepandaPageModule {}
