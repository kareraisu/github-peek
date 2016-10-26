import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-orgs',
  templateUrl: 'orgs.html'
})

export class OrgsPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Orgs Page');
  }

}
