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
public token : any;
public dataOrder:any;
constructor(
  public http: Http,
  public storage: Storage,
  public auth: AuthServiceProvider) {
  
  this.assignToken();
  // this.ambildata();
  // this.getUserId();
}

getUserId() {
  this.auth.getData().then((data) => {
    console.log(data);
  });
}

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
// ambildata() {
//   this.getOrder().then((datas)=>{
//     this.dataOrder = datas;
//   });
// }

order(data) {
    return new Promise((resolve, reject) => {
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization','Bearer '+ this.token);
      this.http.post(apiUrl+"/orders", JSON.stringify(data), {headers: headers})
        .subscribe(res => {
          console.log(res);
          resolve(res.json());
          this.data = res.json();          
          }, (err) => {
          reject(err);
        });
    });
  }

  getOrder() {
    return new Promise((resolve,reject)=>{
      var headers = new Headers();
      this.assignToken();
      console.log(this.token);
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization','Bearer '+ this.token);
      this.http.get(apiUrl+"/orders", {headers: headers}).subscribe(res => {
        console.log(res);
        resolve(res.json());
        this.data = res.json();        
        }, (err) => {
        reject(err);
      });
    });
  }

}


