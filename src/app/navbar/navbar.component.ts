import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { UserBoardgamesService } from '../user-boardgames.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  // need to understand this
  constructor(private userservice: UserService) { }

}
