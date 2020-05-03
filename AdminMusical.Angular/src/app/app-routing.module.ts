import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const APP_ROUTES: Routes = [
     {
      path: '',
      loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
      data: {animation: 'HomePage'}
    },
    {
      path: 'home',
      loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
      data: {animation: 'HomePage'}
    },
    {
      path: 'musica',
      loadChildren: () => import('./musicas/musicas.module').then(m => m.MusicasModule),
      data: {animation: 'MusicaPage'}
    }
];


@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class RoutingModule { }

