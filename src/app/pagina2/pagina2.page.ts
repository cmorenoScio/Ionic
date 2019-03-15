import { Component, OnInit } from '@angular/core';
import {NavController, NavParams} from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {

  constructor(private _router: Router) {}
  goToComponents() {
    this._router.navigate(['./home']);
  }
  goToList() {
    this._router.navigate(['./pagina2']);
  }
  goToInputs() {
    this._router.navigate(['./pagina3']);
  }
  ngOnInit() {
  }

}
