import {Component} from 'angular2/core';
import {CORE_DIRECTIVES
  , FORM_DIRECTIVES
  , FormBuilder
  , ControlGroup
  , Validators
  , NgClass
  , NgForm
} from 'angular2/common';
import {EmailValidator} from "./../validator/validators";
import {UserListComponent} from './user-list.component';
import {UserDetailComponent} from './user-detail.component';

import {UserService} from './user.service';

@Component({
  selector: 'user',
  providers: [ ],
  directives: [ CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass, EmailValidator ],
  pipes: [ ],
  styles: [ require('./user.css') ],
  template: require('./input.html')
})
/**
 * Userクラス
 */
export class UserFormComponent {
/*
  model = new User("開発太郎", "hoge@example.com");

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  active = true;

  newUser() {
    this.model = new User('', '');
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }

  showFormControls(form:NgForm) {
    return form && form.controls['name'] && form.controls['name'].value;
  }


  ngOnInit() {
    console.log('User:ngOnInit');
    // this.title.getData().subscribe(data => this.data = data);
  }
*/
  /*
  ngOnDestroy() {
    console.log("User:ngOnDestroy");
  }
  ngDoCheck() {
    console.log("User:ngDoCheck");
  }
  ngOnChenges(chenges) {
    console.log("User:ngOnChenges");
  }
  ngAfterContentInit() {
    console.log("User:ngAfterContentInit");
  }
  ngAfterViewInit() {
    console.log("User:ngAfterViewInit");
  }
  ngAfterViewChecked() {
    console.log("User:ngAgterViewChecked");
  }
  */
}
