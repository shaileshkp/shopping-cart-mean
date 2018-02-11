import { Component, Input, OnInit} from '@angular/core';
import { User } from '../login/user.model';
import { LoginService } from '../login/login.service';
import { browser } from 'protractor';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  currentUser: User;

  constructor(private loginService: LoginService) { 
    this.loginService.currentUser
      .subscribe((user: User) => {
        this.currentUser = user;
      }
    );
  }
  
  ngOnInit() {
  }

  logout() {
    this.loginService.logOut();
    this.currentUser = undefined;
  }

  askForNotification() {
    Notification.requestPermission(function (result) {
      console.log('User purmission', result);
      if(result !== 'granted') {
        console.log('No notificaiton purmission');
      } else {
        if('serviceWorker' in navigator) {
          var options = {
            body: 'This is notificaiton of cart from service worker',
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
    });
  }

}
