import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

let apiUrl = 'http://localhost:3000';

@Injectable()
export class OrderProvider {
data : any;
token : any;
dataOrder:any;
constructor(
  public http: Http,
  private storage: Storage) {
  
  this.assignToken();
  this.ambildata();

  console.log('Hello OrderProvider Provider');
}

getToken() {
  return this.storage.get("token").then((val)=>
  {
    return val;
  });
}

assignToken() {
  this.getToken().then((data) => {
    this.token = data;
  });
}

ambildata() {
  this.getOrder().then((datas)=>{
    this.dataOrder=datas;
  });
}

order(data) {
    return new Promise((resolve, reject) => {
      var pala = new Headers();
      pala.append('Content-Type', 'application/json');
      pala.append("Authorization","Bearer "+ this.token);
      this.http.post(apiUrl+"/orders", JSON.stringify(data), {headers: pala})
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
      var pala = new Headers();
      console.log(this.token);
      pala.append('Content-Type', 'application/json');
      pala.append("Authorization","Bearer "+ this.token);
      this.http.get(apiUrl+"/orders", {headers: pala}).subscribe(res => {
        console.log(res);
        resolve(res.json());
        this.data = res.json();        
        }, (err) => {
        reject(err);
      });
    });
  }

}


