import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ReposPage } from '../repos/repos';

import { User } from '../../models/user';

import { Github } from '../../providers/github';


@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html'
})
export class UserDetailsPage {
  user: User;

  constructor(
    public navCtrl: NavController,
    private navParams: NavParams,
    private github: Github
  ){
    let username = navParams.get('username');
    github.getUser(username).subscribe(user => {
      this.user = user;
    })
  }

  goToRepos() {
    let username = this.user.login
    this.navCtrl.push(ReposPage, {username});
  }

}
