import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { UsersPage } from '../pages/users/users';
import { ReposPage } from '../pages/repos/repos';
import { OrgsPage } from '../pages/orgs/orgs';
import { UserDetailsPage } from '../pages/user-details/user-details';

import { GithubUsers } from '../providers/github-users';


@NgModule({
  declarations: [
    MyApp,
    UsersPage,
    ReposPage,
    OrgsPage,
    UserDetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UsersPage,
    ReposPage,
    OrgsPage,
    UserDetailsPage
  ],
  providers: [GithubUsers]
})

export class AppModule {}
