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
    kompetisi : boolean =false;
    seminar : boolean =false;
    lingkungan : boolean =false;
    expo : boolean =false;
    olahraga : boolean =false;
    bazaar : boolean =false;
    seni : boolean =false;
    sosial : boolean =false;
  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterPage');
  }
  
  cari()
  {
    console.log("nilai",this.kompetisi,this.seminar,this.lingkungan,this.expo,this.olahraga,this.bazaar,this.seni,this.sosial,this.dualValue2.upper,this.dualValue2.lower);
    
  }
}
