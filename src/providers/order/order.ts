import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

/*
  Generated class for the OrderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

let apiUrl = 'http://localhost:3000';

@Injectable()
export class OrderProvider {
data : any;
token : any;
  constructor(
    public http: Http,
    private storage: Storage) {
    this.bawaToken();
    console.log('Hello OrderProvider Provider');
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


