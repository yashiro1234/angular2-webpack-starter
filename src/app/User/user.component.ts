import {Component} from 'angular2/core';
import {AppState} from '../app.service';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'user',
  providers: [ ],
  directives: [ ],
  pipes: [ ],
  styles: [ require('./user.css') ],
  template: require('./input.html')
})
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
