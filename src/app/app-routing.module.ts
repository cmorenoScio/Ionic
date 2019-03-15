import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'page2', loadChildren: './page2/page2.module#Page2PageModule' },
  { path: 'page', loadChildren: './page/page.module#PagePageModule' },
  { path: 'pagina2', loadChildren: './pagina2/pagina2.module#Pagina2PageModule' },
  { path: 'pagina3', loadChildren: './pagina3/pagina3.module#Pagina3PageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
