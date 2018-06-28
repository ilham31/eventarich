import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';


/*
  Generated class for the EventProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
let apiUrl = 'http://localhost:3000';

@Injectable()
export class EventProvider {
token: any;
data:any;
  constructor(
    public http: Http,
    private storage: Storage,
    
  ) {
    this.bawaToken();
    console.log('Hello EventProvider Provider');
  }
  getToken()
  {
    return this.storage.get("token").then((val)=>
    {
      return val;
      
      
    });
  }
  
  bawaToken() {
    this.getToken().then((data) => {
      this.token = data;
    });
  }
  tambahEvent(data)
  {
    return new Promise((resolve, reject) => {
      var pala = new Headers();
      pala.append('Content-Type', 'application/json');
      pala.append("Authorization","Bearer "+ this.token);
      this.http.post(apiUrl+'/events', JSON.stringify(data), {headers: pala})
        .subscribe(res => {
          console.log(res);
          resolve(res.json());
          this.data = res.json();
         }, (err) => {
          reject(err);
        });
  });
  }  

  getEventIdUser()
  {
    return new Promise((resolve, reject) => {
      var pala = new Headers();
      pala.append('Content-Type', 'application/json');
      pala.append("Authorization","Bearer "+ this.token);
      this.http.get(apiUrl+'/events/user', {headers: pala})
        .subscribe(res => {
          console.log(res);
          resolve(res.json());
          this.data = res.json();
         }, (err) => {
          reject(err);
        });
  });
  }

  getAllEvent()
  {
    return new Promise((resolve, reject) => {
      var pala = new Headers();
      pala.append('Content-Type', 'application/json');
      pala.append("Authorization","Bearer "+ this.token);
      this.http.get(apiUrl+'/events', {headers: pala})
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

