import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { User } from '../models/user';
import { Repo } from '../models/repo';


@Injectable()
export class Github {
  githubApiUrl = 'https://api.github.com';

  constructor(public http: Http) { }

  // Load all github users
  loadUsers(): Observable<User[]> {
    return this.http.get(`${this.githubApiUrl}/users`)
      .map(res => <User[]> res.json());
  }

  // Get github user
  getUser(username: string): Observable<User> {
    return this.http.get(`${this.githubApiUrl}/users/${username}`)
      .map(res => <User> res.json())
  }

  // Search for github users
  searchUsers(searchParam: string): Observable<User[]> {
    return this.http.get(`${this.githubApiUrl}/search/users?q=${searchParam}`)
      .map(res => <User[]> res.json().items)
  }

  // Load all github repos
  loadRepos(): Observable<Repo[]> {
    return this.http.get(`${this.githubApiUrl}/repositories`)
      .map(res => <Repo[]> res.json());
  }

  // Get github repos of user
  getUserRepos(username: string): Observable<Repo[]> {
    return this.http.get(`${this.githubApiUrl}/users/${username}/repos`)
      .map(res => <Repo[]> res.json())
  }

  // Get github repo by providing name and user
  getRepo(reponame: string, username: string): Observable<Repo> {
    return this.http.get(`${this.githubApiUrl}/repos/${username}/${reponame}`)
      .map(res => <Repo> res.json())
  }

  // Search for github repos
  searchRepos(searchParam: string): Observable<Repo[]> {
    return this.http.get(`${this.githubApiUrl}/search/repositories?q=${searchParam}`)
      .map(res => <Repo[]> res.json().items)
  }
}
