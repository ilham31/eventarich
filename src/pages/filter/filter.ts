import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html',
})
export class FilterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }
  dualValue2: any = {
    upper:12,
    lower:1
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterPage');
  }
  

}
