import {Component} from 'angular2/core';
import {AppState} from '../app.service';

/**
 * Userクラス
 */
export class User {
  // Set our default values
  localState = { value: '' };

  name:string;
  email:string;
  // TypeScript public modifiers
  constructor(public appState: AppState) {

  }

  ngOnInit() {
    console.log('hello `User` component');
    // this.title.getData().subscribe(data => this.data = data);
  }

  submitState(value) {
    console.log('submitState', value);
    this.appState.set('value', value);
  }

}
