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
  constructor(
    public http: Http,
    private storage: Storage) {
    this.assignToken();
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

order(data)
  {
    return new Promise((resolve, reject) => {
      var pala = new Headers();
      pala.append('Content-Type', 'application/json');
      pala.append("Authorization","Bearer "+ this.token);
      this.http.post(apiUrl+"/orders", JSON.stringify(data), {headers: pala})
        .subscribe(res => {
          console.log(res);
          resolve(res.json());
          this.data = res.json();
          
          // console.log('response',this.data);
          }, (err) => {
          reject(err);
        });
    });
  }

}


