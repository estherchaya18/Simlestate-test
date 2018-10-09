import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../service/user.service';
import { Router, UrlTree } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: User;

  constructor(private userService: UserService,router:Router) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      const tree: UrlTree = router.parseUrl('/team;id=33');
  }

  ngOnInit() {
  }

  

}
