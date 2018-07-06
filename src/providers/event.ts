import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

let apiUrl = 'http://localhost:3000';

@Injectable()
export class EventProvider {

data:any;

constructor(  public http: Http,
              private storage: Storage ) {

  }


  // Post event baru
  tambahEvent(data, token) {
    return new Promise((resolve, reject) => {
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization','Bearer '+ token);
      this.http.post(apiUrl+'/events', JSON.stringify(data), {headers: headers})
        .subscribe(res => {
          console.log(res);
          resolve(res.json());
          this.data = res.json();
         }, (err) => {
          reject(err);
        });
    });
  }

  // Get Event yang sudah dibuat user
  getEventIdUser(token) {
    return new Promise((resolve, reject) => {
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization','Bearer '+ token);
      this.http.get(apiUrl+'/events/user', {headers: headers})
        .subscribe(res => {
          console.log(res);
          resolve(res);
          this.data = res.json();
         }, (err) => {
          reject(err);
        });
    });
  }

  // Get semua event yang udah ada
  getAllEvent() {
    return new Promise((resolve, reject) => {
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      // headers.append('Authorization','Bearer '+ token);
      this.http.get(apiUrl+'/events', {headers: headers}).subscribe(res => {
          console.log(res);
          resolve(res);
         }, (err) => {
          reject(err);
        });
    });
  }

  favouriteEvent(data)
  {
    return new Promise((resolve, reject) => {
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.post(apiUrl+'/events', JSON.stringify(data), {headers: headers})
        .subscribe(res => {
          console.log(res);
          resolve(res.json());
          this.data = res.json();
         }, (err) => {
          reject(err);
        });
    });
  }

  
}

