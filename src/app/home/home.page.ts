import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

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
}
