import {Component, OnInit}   from '@angular/core';
import {User} from './user';
import {UserService} from './user.service';
import {UserDetailComponent} from './user-detail.component';
import {Router,RouteParams} from '@angular/router-deprecated';
@Component({
  template: require('./user-list.component.html'),
  providers: [UserService],
  directives: [UserDetailComponent]
})
export class UserListComponent implements OnInit {

  users:User[];

  private _selectedId:number;

  constructor(private _service:UserService,
              private _router:Router,
              routeParams:RouteParams) {
    this._selectedId = +routeParams.get('id');
    console.log('constructor:' + this._selectedId);
  }

  isSelected(user:User) {
    return user.id === this._selectedId;
  }

  ngOnInit() {
    console.log("user-list.component実行");
    this._service.getUsers().then(users => this.users = users)
  }

  onSelect(user:User) {
    console.log('onSelect:' + user.id);
    this._router.navigate(['UserDetail', {id: user.id}]);
  }

  addUser() {
    console.log("addUser");
    this._router.navigate(['UserDetail', {id:""} ]);
  }
}
