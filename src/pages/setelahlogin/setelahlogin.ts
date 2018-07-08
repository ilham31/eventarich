import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-setelahlogin',
  templateUrl: 'setelahlogin.html',
})

export class SetelahloginPage {
  // isLoggedIn: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  searchPage()
  {
    this.navCtrl.push('SearchPage');
  }
  
  addEvent()
  {
      this.navCtrl.push('TambaheventPage');
  }

  lihatEvent(){
    this.navCtrl.push('EventPage');
  }
  
}
