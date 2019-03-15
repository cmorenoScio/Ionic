import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.page.html',
  styleUrls: ['./pagina3.page.scss'],
})
export class Pagina3Page implements OnInit {

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
