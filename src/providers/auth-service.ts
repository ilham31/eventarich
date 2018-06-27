import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';

let apiUrl = 'http://localhost:3000';

@Injectable()
export class AuthServiceProvider {
  data:any;
  message:any;
  token:any;
  tes:any;

  HAS_LOGGED_IN = 'hasLoggedIn';

  constructor(  public http: Http,
                private storage: Storage,
                public events: Events ) {}

  login(credentials) {
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        
        this.http.post(apiUrl+'/users/login', JSON.stringify(credentials), {headers: headers})
          .subscribe(res => {
            console.log(res);
            resolve(res.json());  
            this.data = res.json();
            // console.log('response',this.data);
            this.message = this.data.message;
            this.token = this.data.token;
            this.storage.set('token', this.token);
            this.storage.set(this.HAS_LOGGED_IN, true);
            this.events.publish('user:login');
           }, (err) => {
            reject(err);
          });
    });
  }

  hasLoggedIn(): Promise<boolean> {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => { 
      return value === true;
    });
  };


  signup(data) {
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
    
        this.http.post(apiUrl+'/users/signup', JSON.stringify(data), {headers: headers})
          .subscribe(res => {
            resolve(res);
            this.events.publish('user:signup');
            
          }, (err) => {
            reject(err);
          });
      });
  }
 
  cektoken()
  {
      this.storage.get('token').then((val)=>{
        return val;
      })
     
  }

  logout(){
    this.storage.remove(this.HAS_LOGGED_IN);
    this.events.publish('user:logout')
  }

}
