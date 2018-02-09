import { Component, OnInit } from '@angular/core';
import { LoginService } from './components/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  selectedTab='home';

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.onLoad();
  }
  displayConformNotification() {
    
  }
  onNavigate(tabName: string) {
    this.selectedTab = tabName;
  }

  showNotification() {
    Notification.requestPermission(function (result) {
      console.log('user choice', result);
      if(result !== 'granted') {
        console.log('No notificaiton purmission');
      } else {
        var options = {
          body: "New Notificaiton.",
          icon: "favicon.ico"
        };
        new Notification("Notificaiton",options);
      }
    })
  }
}
