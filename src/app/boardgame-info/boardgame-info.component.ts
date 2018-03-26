import { Component, OnInit, Input } from '@angular/core';
// import { Component, Input } from '@angular/core';
// import { Router } from '@angular/router';
import { Boardgame } from '../boardgameModel';
// import { User } from '../userModel';
// import { UserService } from '../user.service';
// import { UserBoardgames } from '../user-boardgames-Model';
// import { UserBoardgamesService } from '../user-boardgames.service';

@Component({
  selector: 'app-boardgame-info',
  templateUrl: './boardgame-info.component.html',
  styleUrls: ['./boardgame-info.component.css']
})
export class BoardgameInfoComponent implements OnInit {
  // export class BoardgameInfoComponent {
  showDetails = false;
  @Input() game: Boardgame;
  constructor() { }
  addGame() {
    console.log('trying to add game');
  }

  ngOnInit() {
  }
}
