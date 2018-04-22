import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SearchPage} from '../search/search';

/**
 * Generated class for the SetelahloginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-setelahlogin',
  templateUrl: 'setelahlogin.html',
})
export class SetelahloginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetelahloginPage');
  }
  searchPage()
  {
    this.navCtrl.push(SearchPage);
  }

}
