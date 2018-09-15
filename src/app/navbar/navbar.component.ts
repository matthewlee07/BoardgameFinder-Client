import { Component } from '@angular/core';
import { User } from '../userModel';
import { UserService } from '../user.service';
import { UserBoardgamesService } from '../user-boardgames.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private userservice: UserService) { }

  logout() {
    this.userservice.logout();

  }
}
