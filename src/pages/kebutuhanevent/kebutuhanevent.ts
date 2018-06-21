import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-kebutuhanevent',
  templateUrl: 'kebutuhanevent.html',
})
export class KebutuhaneventPage {
  selectedLeave : string = '';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KebutuhaneventPage');
  }

}
