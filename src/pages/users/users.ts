import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { UserDetailsPage } from '../user-details/user-details';

import { User } from '../../models/user';

import { Github } from '../../providers/github';


@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {
  users: User[]
  originalUsers: User[];

  constructor(
    public navCtrl: NavController,
    private github: Github
  ){
    github.loadUsers().subscribe(users => {
      this.users = users;
      this.originalUsers = users;
    })

  }

  goToDetails(username: string) {
    this.navCtrl.push(UserDetailsPage, {username});
  }

  search(searchEvent) {
    let term = searchEvent.target.value
    // We will only perform the search if we have 3 or more characters
    if (term.trim() === '' || term.trim().length < 3) {
      // Load cached users
      this.users = this.originalUsers;
    } else {
      // Get the searched users from github
      this.github.searchUsers(term).subscribe(users => {
        this.users = users
      });
    }
  }

}
