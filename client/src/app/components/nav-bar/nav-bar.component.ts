import { Component, Input, OnInit} from '@angular/core';
import { User } from '../login/user.model';
import { LoginService } from '../login/login.service';
import { browser } from 'protractor';
import { NotificationService } from '../../notification.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  currentUser: User;

  constructor(private loginService: LoginService, public notificationService: NotificationService) { 
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
        if(!('serviceWorker' in navigator)) {
          return;
        }

        var reg;
        navigator.serviceWorker.ready
          .then(function(swreg) {
            reg = swreg;
            return swreg.pushManager.getSubscription();
          })
          .then(function(sub) {
            if(sub === null) {
              var vapidPublicKey = 'BAeEP0Pi0FDXYrUHA8ipXPWS0di1ZyAORScTdPNandRanbRkUm6mY3q6481wQ9q89CnDsttVRTiFzFH6Zfr0oPE';
              var ns = new NotificationService();
              var convertedVapidPublicKey = ns.urlBase64ToUint8Array(vapidPublicKey);
              console.log(convertedVapidPublicKey);
              reg.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: convertedVapidPublicKey
              }).then(function(newSub) {
                // var http: Http;
                // var ns = new NotificationService(http);
                //   ns.subscribeNewUser(newSub).subscribe(
                //   (response) =>{
                //     if(response.status === 200) {
                //       console.log('new user added');
                //     }
                //   }
                // )
                fetch('http://localhost:3000/api/notification/nwsub', {
                  method:'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                  },
                  body: JSON.stringify(newSub)
                })
                .then(function() {
                  console.log('New subscription');
                });
              });
            } else {

            }
          }).then(function() {
            new NotificationService().displayNotification();
          })
          .catch(function(err) {
            console.log(err);
          });
      }
    });
  }

}
