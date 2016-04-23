import {Injectable} from 'angular2/core';
import {User} from './user';

@Injectable()
export class UserService {
  getUsers() {
    return usersPromise;
  }

  getUser(id: number | string) {
    return usersPromise.then(users => users.filter(h => h.id === +id)[0]);
  }
}

var USERS = [
  new User(11, 'Mr. Nice', 'hoge@example.com'),
  new User(12, 'RubberMan', 'fuga@example.com')
];

var usersPromise = Promise.resolve(USERS);
