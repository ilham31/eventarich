import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
// import { Storage } from '@ionic/storage';

let apiUrl = 'http://localhost:3000';

@Injectable()
export class AuthServiceProvider {

  constructor(public http: Http
              ) {}

  login(credentials) {
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http.post(apiUrl+'/users/login', JSON.stringify(credentials), {headers: headers})
          .subscribe(res => {
            resolve(res.json());  
          //   var data=res[0];
          // for (var i=0; i<data.length(); i++){
          //   console.log("message : ",data[i].message);
          //   console.log("token : ",data[i].token);
          // }
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
