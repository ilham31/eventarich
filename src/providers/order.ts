import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

import { AuthServiceProvider } from './auth-service';

let apiUrl = 'http://localhost:3000';

@Injectable()
export class OrderProvider {
  public data : any;
  // public token : any;
  public dataOrder:any;

  constructor(public http: Http,
              public storage: Storage,
              public auth: AuthServiceProvider) {

  }

  //Post order
  orderKebutuhan(data, token) {
      return new Promise((resolve, reject) => {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization','Bearer '+ token);
        this.http.post(apiUrl + "/orders", JSON.stringify(data, token), {headers: headers})
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
        });
      });
    }

  // Get order berdasarkan User
  getOrder(token) {
    return new Promise((resolve,reject)=>{
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization','Bearer '+ token);
      this.http.get(apiUrl + "/orders", {headers: headers}).subscribe(res => {
        console.log("get order",res);
        resolve(res);
        }, (err) => {
        reject(err);
      });
    });
  }

}


