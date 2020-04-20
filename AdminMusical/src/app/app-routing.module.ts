import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const APP_ROUTES: Routes = [
     {
      path: '',
      loadChildren: 'src/app/musicas/musicas.module#MusicasModule'
    }
];


@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class RoutingModule { }

