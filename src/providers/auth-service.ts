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
  constructor(
    public http: Http,
    private storage: Storage ) {}

  public isLoggedIn = 'statusnyah';
  
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

            this.storage.set(this.isLoggedIn, true);
            // localStorage.setItem("token",this.data)

            // console.log("message",this.message);
            // console.log("token",this.token);
            // localStorage.setItem('token', this.data.token);
            // this.tes = localStorage.getItem('token');
            // console.log("isi storage",this.tes);
           }, (err) => {
            reject(err);
          });
    });
  }


  isLogin() {
    return this.storage.get(this.isLoggedIn).then((value) => {
      return value;
    });
  }

  cektoken()
  {
      this.storage.get('token').then((val)=>{
        return val;
      })
     
  }

  logout()
  {
    this.storage.remove("token");
    // this.storage.remove()
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

}
