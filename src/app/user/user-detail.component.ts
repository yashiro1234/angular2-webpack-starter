import {Component, OnInit}  from 'angular2/core';
import {Validators} from 'angular2/common';
import {User, UserService}   from './user.service';
import {RouteParams, Router} from 'angular2/router';

@Component({
  styles:[`
    .ng-valid.ng-dirty {
      border-left: 5px solid lightgreen;
    }
    .ng-invalid.ng-dirty {
      border-left: 5px solid lightpink;
    }
    .form-invalid { background-color: lightpink; }
    .form-valid { background-color: lightgreen; }
    form { padding: 10px;}
  `],
  template: require('./user-detail.component.html')
})
export class UserDetailComponent implements OnInit  {
  
  user: User;

  constructor(
    private _router:Router,
    private _routeParams:RouteParams,
    private _service:UserService){}

  ngOnInit() {
    let id = this._routeParams.get('id');
    this._service.getUser(id).then(user => this.user = user);
  }

  gotoUsers() {
    let userId = this.user ? this.user.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Add a totally useless `foo` parameter for kicks.
    this._router.navigate(['Users',  {id: userId, foo: 'foo'} ]);
  }
  onSubmit(user){
    this.user = user;
  }
}
