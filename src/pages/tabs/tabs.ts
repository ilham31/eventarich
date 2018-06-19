import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root = 'SetelahloginPage';
  tab2Root = 'TopeventPage';

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad(){
    console.log('Dibuka Tabsnya');
  }

}