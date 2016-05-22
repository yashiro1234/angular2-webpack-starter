import {Component} from '@angular/core';
import { AppState } from '../app.service';
@Component({
  selector: 'index',
  template:'<h2><ようこそ</h2>'
})
export class Index {
  constructor(public appState: AppState) {
  }
}
