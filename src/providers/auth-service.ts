import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
// import { Storage } from '@ionic/storage';
let apiUrl = 'http://localhost:3000';

@Injectable()
export class AuthServiceProvider {
  data:any;
  message:any;
  token:any;
  tes:any;

  public isLoggedIn = 'status';
  constructor(
    public http: Http,
    private storage: Storage ) {}

  login(credentials) {
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http.post(apiUrl+'/users/login', JSON.stringify(credentials), {headers: headers})
          .subscribe(res => {
            resolve(res.json());  
            this.data = res.json();
            console.log("respon",this.data);
            this.message = this.data.message;
            this.token = this.data.token;
            this.storage.set("token",this.token);
            this.storage.set('status', true);
           }, (err) => {
            reject(err);
          });
    });
  }

  isLogin() {
    return this.storage.get('status').then((value) => { 
      console.log(value);
      return value;
    });
  }


  register(data) {
  return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
   
      this.http.post(apiUrl+'/users/signup', JSON.stringify(data), {headers: headers})
        .subscribe(res => {
          resolve(res);
          
        }, (err) => {
          reject(err);
        });
    });
  }

  logout(){
    this.storage.remove(this.isLoggedIn);
  }

}
