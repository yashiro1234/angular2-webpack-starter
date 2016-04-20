/*
 * Angular 2 decorators and services
 */
import {Component, ViewEncapsulation} from 'angular2/core';
import {RouteConfig, Router} from 'angular2/router';

import {UserFormComponent} from './user/user.component';
import {DynamicForm} from './dynamic/dynamic-form.component';
import {Home} from './home';
import {AppState} from './app.service';
import {RouterActive} from './router-active';

import {QuestionService} from './dynamic/question.service';

import {UserListComponent} from './user/user-list.component';
import {UserDetailComponent} from './user/user-detail.component';

import {UserService} from './user/user.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  pipes: [ ],
  providers: [UserService, QuestionService ],
  directives: [ RouterActive ],
  encapsulation: ViewEncapsulation.None,
  templateUrl: '/app/app.component.html'
})
@RouteConfig([
  { path: '/',      name: 'Index', component: Home, useAsDefault: true },
  { path: '/users', name: 'Users', component: UserListComponent },
  { path: '/user/:id', name: 'UserDetail', component: UserDetailComponent},
  { path: '/dynamic', name: 'Dynamic', component: DynamicForm},
  { path: '/home',  name: 'Home',  component: Home },
  // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
  { path: '/about', name: 'About', loader: () => require('es6-promise!./about')('About') },
])
export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular2テスト';
  url = 'https://twitter.com/AngularClass';

  constructor(public appState: AppState) {}

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
