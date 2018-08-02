import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Events } from 'ionic-angular';


let apiUrl = 'http://eventarich.codepanda.web.id';

// let apiUrl = 'http://localhost:3000';



@Injectable()
export class EventProvider {

  dataEventUser: any;
  updatedStatus: any = true;
  likedByMe: string[] = [];


  constructor( private http: Http, private storage: Storage, private events: Events ) {
    console.log('Ini daftar likenya', this.likedByMe);
  }

  checkUpdated() {
    this.events.subscribe('event:updated', updatedStatus => {
      // console.log(updatedStatus);
      if(updatedStatus == true) {
        this.updatedStatus == true;
      } else {
        this.updatedStatus == false;
      }
    });
    // console.log(this.updatedStatus);
  }
  

  hasLiked(eventId: string): boolean {
    return (this.likedByMe.indexOf(eventId) > -1);
  };

  addLiked(eventId: string): void {
    this.likedByMe.push(eventId);
  };
  
  // Post event baru
  tambahEvent(data, token) {
    return new Promise((resolve, reject) => {
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization','Bearer '+ token);
      this.http.post(apiUrl+'/events', JSON.stringify(data), {headers: headers}).subscribe(res => {
        if(res.status == 200) {
          resolve(res);
        }  
      }, (err) => {
        reject(err);
      });
    });
  }
// Like Event
  likeEvent(token, eventId) {
    return new Promise((resolve, reject) => {
      var headers = new Headers();
      // headers.append('Content-Type', 'application/json');
      headers.append('Authorization','Bearer '+ token);
      this.http.post(apiUrl+'/events/like/' + eventId, JSON.stringify(eventId), {headers: headers}).subscribe(res => {
        if(res.status == 200) {
          resolve(res);
        }  
      }, (err) => {
        reject(err);
      });
    });
  }

  // Get Event yang sudah dibuat user
  getEventIdUser(token) {
    this.checkUpdated();
    if(this.updatedStatus == false) {

      // console.log('masuk sini');
      return Promise.resolve(this.dataEventUser);

    } else if(this.updatedStatus == true) {

      // console.log('masuk dieu');
      return new Promise((resolve, reject) => {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization','Bearer '+ token);
        // console.log('Ada??');

        this.http.get(apiUrl+'/events/user', {headers: headers}).subscribe(res => {
          if(res.status == 200) {
            this.dataEventUser = res;
            this.events.publish('event:updated', false);
            resolve(res);
          }
        }, (err) => {
            console.log('Error in line of Error event.ts');
            reject(err);
        });
      });

    }
    
  }

  // Get semua event yang udah ada
  getAllEvent() {
    return new Promise((resolve, reject) => {
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      // headers.append('Authorization','Bearer '+ token);
      this.http.get(apiUrl+'/events', {headers: headers}).subscribe(res => {
        if(res.status == 200) {
          resolve(res);
        }
        }, (err) => {
          reject(err);
        });
    });
  } 

  // Delete Event user sesuai event ID nya
  deleteEvent(token, eventId) {
    return new Promise((resolve, reject) => {
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization','Bearer '+ token);
      this.http.delete(apiUrl+'/events/delete/' + eventId, {headers: headers}).subscribe(res => {
          if(res.status == 200) {
            resolve(res);
          }
         }, (err) => {
          reject(err);
        });
    });
  }
  
}

