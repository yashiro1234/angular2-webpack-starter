import { Component, ViewEncapsulation } from '@angular/core';
import {RouteConfig} from '@angular/router-deprecated';
import {AppState} from './app.service';
import {RouterActive} from './router-active';
/** Home */
import {Home} from './home';
/** ユーザ管理機能 */
import {UserListComponent} from './user/user-list.component';
import {UserDetailComponent} from './user/user-detail.component';
import {UserService} from './user/user.service';

@Component({
  selector: 'app',
  pipes: [ ],
  providers: [UserService],
  directives: [ RouterActive ],
  encapsulation: ViewEncapsulation.None,
  styles: [`
    body {
      margin: 0;
    }
    md-toolbar ul {
      display: inline;
      list-style-type: none;
      margin: 0;
      padding: 0;
      width: 60px;
    }
    md-toolbar li {
      display: inline;
    }
    md-toolbar li.active {
      background-color: lightgray;
    }
  `],
  template: require('./index.html')
})
@RouteConfig([
  { path: '/',      name: 'Index', component: Home, useAsDefault: true },
  { path: '/user', name: 'User', component: UserListComponent },
  {path: '/user/:id', name: 'UserDetail', component: UserDetailComponent},
//  { path: '/dynamic', name: 'Dynamic', component: DynamicForm},
  { path: '/home',  name: 'Home',  component: Home },
  // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
  { path: '/about', name: 'About', loader: () => require('es6-promise!./about')('About') }
])
export class App {
  name = 'Angular2テスト';
  url = 'https://twitter.com/AngularClass';

  constructor(public appState: AppState) {
  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }
}
