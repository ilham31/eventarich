import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

import { AuthServiceProvider } from '../../providers/auth-service';

@IonicPage({ priority: 'high' })
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root = 'HomePage';
  tab2Root = 'SetelahloginPage';

  variable: any;

  mySelectedIndex: number;
  tabBarElement: any;

  constructor(public navParams: NavParams,
              public auth: AuthServiceProvider
              ) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

  ionViewDidLoad(){
    this.auth.hasLoggedIn().then((value) => {
      if(value) {
        this.variable = true;
      } else {
        this.variable = false;
      }
    });
  }
}
