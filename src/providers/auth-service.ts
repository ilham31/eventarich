import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';

let apiUrl = 'http://149.56.36.130';

// let apiUrl = 'http://localhost:3000';

@Injectable()
export class AuthServiceProvider {
  public data:any;
  public message:any;
  public token:any;
  public tes:any;

  // public token = localStorage.getItem('token');

  HAS_LOGGED_IN = 'hasLoggedIn';

  constructor(  private http: Http, private storage: Storage, public events: Events ) {
    // this.events.publish('event:updated', false);
  }

  hasLoggedIn(): Promise<boolean> {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => { 
      return value === true;
    });
  };

  login(credentials) {
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        
        this.http.post(apiUrl+'/users/login', JSON.stringify(credentials), {headers: headers})
          .subscribe(res => {

            if(res.status == 200) {
              localStorage.setItem('token', res.json().token);
              this.storage.set(this.HAS_LOGGED_IN, true);
              this.events.publish('event:updated', true);
              this.events.publish('user:login');
              resolve(res);
            }

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
            
            if(res.status == 201) {
              resolve(res);
              this.events.publish('user:signup');
            }
            
          }, (err) => {
            reject(err);
          });
      });
  }

  updateProfile(credentials, token) {
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization','Bearer '+ token);
        this.http.post(apiUrl+'/profiles/edit', JSON.stringify(credentials), {headers: headers})
          .subscribe(res => {
            if(res.status == 200) {
              resolve(res);
            }

           }, (err) => {
            reject(err);
          });
    });
  }

  getUserData(token) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization','Bearer '+ token);
      this.http.get(apiUrl+'/users', {headers: headers})
        .subscribe(res => {
          
          if(res.status == 200 ) {
            resolve(res);
            console.log('User data', res);
          }

        }, (err) => {
          reject(err);
        });
    });
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('filter');
    localStorage.removeItem('userName');
    this.storage.remove(this.HAS_LOGGED_IN);
    this.events.publish('user:logout');
    this.storage.clear();
  }
}
