import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';

let apiUrl = 'http://localhost:3000';

@Injectable()
export class AuthServiceProvider {
  public data:any;
  public message:any;
  public token:any;
  public tes:any;

  HAS_LOGGED_IN = 'hasLoggedIn';

  constructor(  public http: Http,
                private storage: Storage,
                public events: Events ) {
                  this.assignToken();
    }

  hasLoggedIn(): Promise<boolean> {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => { 
      return value === true;
    });
  };

  cekToken() {
    return this.storage.get('token').then((val)=>{
      return val;
    })
  }

  assignToken() {
    this.cekToken().then((data) => {
      this.token = data;
    });
  }

  logout(){
    this.storage.remove("token");
    this.storage.remove(this.HAS_LOGGED_IN);
    this.events.publish('user:logout');
  }


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

  getData() {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      console.log('Token', this.token);
      headers.append('Content-Type', 'application/json');
      headers.append("Authorization","Bearer "+ this.token);
      this.http.get(apiUrl+'/users', {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

}
