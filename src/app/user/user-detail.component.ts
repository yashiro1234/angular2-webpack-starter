import {Component, OnInit}  from '@angular/core';
import {Control} from '@angular/common';
import {User} from './user';
import {UserService}   from './user.service';
import {Router, RouteParams} from '@angular/router-deprecated';

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
  template: require('./user-detail.component.html'),
  directives: [],
  providers: [UserService]
})

export class UserDetailComponent implements OnInit  {

  user: User;

  name: Control;
  email: Control;

  constructor(
    private _router:Router,
    private _routeParams:RouteParams,
    private _service:UserService){
  }

  ngOnInit() {
    console.log(this._service);
    let id = this._routeParams.get('id');
    let user: User = this._service.getUser(id).then(user => this.user = user);
    this.user = user;
    //this.user = this._service.getUserMock();
  }

  gotoUsers() {
    let userId = this.user ? this.user.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Add a totally useless `foo` parameter for kicks.
    this._router.navigate(['User',  {id: userId, foo: 'foo'} ]);
  }
  onSubmit(user){
    this.user = user;
  }
  saveUser(){
    alert("saveUser実行");
  }
}
