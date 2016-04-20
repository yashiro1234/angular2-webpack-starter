import {Component, OnInit}   from 'angular2/core';
import {User} from './user';
import {UserService} from './user.service';
import {Router, RouteParams} from 'angular2/router';

@Component({
  template: require('./user-list.component.html')
})
export class UserListComponent implements OnInit {

  users:User[];

  private _selectedId:number;

  constructor(private _service:UserService,
              private _router:Router,
              routeParams:RouteParams) {
    this._selectedId = +routeParams.get('id');
  }

  isSelected(user:User) {
    return user.id === this._selectedId;
  }

  onSelect(user:User) {
    this._router.navigate(['UserDetail', {id: user.id}]);
  }

  ngOnInit() {
    this._service.getUsers().then(users => this.users = users)
  }
}
