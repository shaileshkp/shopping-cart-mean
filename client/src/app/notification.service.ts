import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import {environment} from './../environments/environment';
@Injectable()
export class NotificationService {
  
  url: string = "";
  constructor(private http ?: Http) { 
    this.url = environment.production ? '':'http://localhost:3000';
  }

  urlBase64ToUint8Array(base64String) {
    console.log('urlBase64ToUint8Array called');
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, '+')
      .replace(/_/g, '/');
   
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
   
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  displayNotification(){
    if('serviceWorker' in navigator) {
      var options = {
        body: 'This is notificaiton of cart ',
        icon:'/assets/icons/app-icon-96x96.png',
        image: 'favicon.ico',
        lang: 'en-US',
        vibrate: [100, 50, 200],
        tag: 'conform-notification',
        renotify: true,
        actions: [
          {
            action: 'conform',
            title: 'Okay',
            icon: '/assets/icons/app-icon-96x96.png'
          },
          {
            action: 'cancle',
            title: 'Cancle',
            icon: '/assets/icons/app-icon-96x96.png'
          }
        ]
      };
      navigator.serviceWorker.ready
      .then(function(swreg) {
        swreg.showNotification('Shopping Cart', options);
      });
    }
  }
/*
  subscribeNewUser(subscription) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var body = JSON.stringify(subscription);
    console.log(body);
    
    return this.http.post(this.url+'/api/notification/nwsub',body, { headers: headers });
  }
  */
}
