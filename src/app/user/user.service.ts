import {Injectable} from '@angular/core';
import {User} from './user';

@Injectable()
export class UserService {
  getUserMock() {
    return new User(99, 'mock', 'test@example.com');
  }

  getUsers() {
    return usersPromise;
  }

  getUser(id:number | string) {
    return usersPromise.then(user => user.filter(h => h.id === +id)[0]);
  }

  static nextUserId = 100;

  addUser(name:string, email:string) {
    name = name.trim();
    if (name) {
      let user = new User(UserService.nextUserId++, name, email);
      usersPromise.then(users => users.push(user));
    }
  }
}

var USERS = [
  new User(11, 'Mr. Nice', 'hoge@example.com'),
  new User(12, 'RubberMan', 'fuga@example.com')
];

var usersPromise = Promise.resolve(USERS);
