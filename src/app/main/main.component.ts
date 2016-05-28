import {Component} from '@angular/core';
import { AppState } from '../app.service';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';
import {BUTTON_DIRECTIVES, TAB_DIRECTIVES} from 'ng2-bootstrap';
@Component({
  selector: 'main',
  directives: [BUTTON_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES, TAB_DIRECTIVES],
//  styles: [ require('./main.css') ],
  template: require('./main.component.html')
})
export class Main {
  constructor(public appState: AppState) {
  }

  public singleModel:string = '1';
  public radioModel:string = 'Middle';
  public checkModel:any = {left: false, middle: true, right: false};

}
