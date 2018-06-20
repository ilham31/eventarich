import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
// import { Storage } from '@ionic/storage';
let apiUrl = 'http://localhost:3000';

@Injectable()
export class AuthServiceProvider {
  data:any;
  message:any;
  token:any;
  constructor(public http: Http
              ) {}
  
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
            console.log("message",this.message);
            console.log("token",this.token);
            localStorage.setItem("token", this.token);
          }, (err) => {
            reject(err);
          });
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
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('X-Auth-Token', localStorage.getItem('token'));

        this.http.post(apiUrl+'logout', {}, {headers: headers})
          .subscribe(res => {
            localStorage.clear();
          }, (err) => {
            reject(err);
          });
    });
  }

}
