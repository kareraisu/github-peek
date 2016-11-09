import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RepoDetailsPage } from '../repo-details/repo-details';

import { Repo } from '../../models/repo';

import { Github } from '../../providers/github';


@Component({
  selector: 'page-repos',
  templateUrl: 'repos.html'
})
export class ReposPage {
  repos: Repo[]
  originalRepos: Repo[]
  username: string
  title: string

  constructor(
    public navCtrl: NavController,
    private navParams: NavParams,
    private github: Github
  ){
    this.username = navParams.get('username')
    if (this.username) {
      // load user repos
      this.title = `${this.username}'s repos`
      github.getUserRepos(this.username).subscribe(repos => {
        this.repos = repos
        this.originalRepos = repos
      })
    }
    else {
      // load all repos
      this.title = 'All repos'
      github.loadRepos().subscribe(repos => {
        this.repos = repos
        this.originalRepos = repos
      })
    }

  }

  goToDetails(repo: any) {
    this.navCtrl.push(RepoDetailsPage, {repo});
  }

  search(searchEvent) {
    let term = searchEvent.target.value
    // We will only perform the search if we have 3 or more characters
    if (term.trim() === '' || term.trim().length < 3) {
      // Load cached repos
      this.repos = this.originalRepos;
    } else {
      // Get the searched repos from github
      this.github.searchRepos(term).subscribe(repos => {
        this.repos = repos
      });
    }
  }

}
