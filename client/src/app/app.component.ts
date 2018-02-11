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
  onNavigate(tabName: string) {
    this.selectedTab = tabName;
  }
}
