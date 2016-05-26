import {Component, OnInit}  from '@angular/core';
import {Control} from '@angular/common';
import {Router, RouteParams} from '@angular/router-deprecated';
import {User} from './user';
import {UserService}   from './user.service';

@Component({
  styles: [`
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
  providers: [UserService],
  exportAs: 'draggable'
})

export class UserDetailComponent implements OnInit {

  user:User;
  editName:string;
  editEmail:string;

  name:Control;
  email:Control;

  constructor(private _router:Router,
              private _routeParams:RouteParams,
              private _service:UserService) {
  }

  ngOnInit() {
    console.log(this._service);
    let id = this._routeParams.get('id');
    this.user = this._service.getUser(id).then(user => {
      if (user) {
        this.editName = user.name;
        this.editEmail = user.email;
        this.user = user;
      } else {
       user = null;
      }
    });
  }

  add() {
    this._service.addUser(this.editName, this.editEmail);
    this.gotoUsers();
  }

  save() {
    this.user.name = this.editName;
    this.user.email = this.editEmail;
    this.gotoUsers();
  }

  cancel() {
    this.editName = this.user.name;
    this.editEmail = this.user.email;
    this.gotoUsers();
  }


  gotoUsers() {
    let userId = this.user ? this.user.id : null;
    this._router.navigate(['User', {id: userId, foo: 'foo'}]);
  }

  logForm(value:any) {
    console.log(value);
    this.gotoUsers();
  }
}
