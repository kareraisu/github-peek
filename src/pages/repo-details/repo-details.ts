import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Repo } from '../../models/repo';

import { Github } from '../../providers/github';


@Component({
  selector: 'page-repo-details',
  templateUrl: 'repo-details.html'
})
export class RepoDetailsPage {
  repo: Repo;

  constructor(
    public navCtrl: NavController,
    private navParams: NavParams,
    private github: Github
  ){
    this.repo = navParams.get('repo');
    github.getRepo(this.repo.name, this.repo.owner.login).subscribe(repo => {
      this.repo = repo;
    })
  }

}
