import { Component, Input, OnInit} from '@angular/core';
import { User } from '../login/user.model';
import { LoginService } from '../login/login.service';

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

    console.log(this.currentUser);
  }

  logout() {
    this.loginService.logOut();
    this.currentUser = undefined;
  }


}
