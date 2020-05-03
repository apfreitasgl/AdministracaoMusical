import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const APP_ROUTES: Routes = [
     {
      path: 'musica',
      loadChildren: () => import('./musicas/musicas.module').then(m => m.MusicasModule)
    }
];


@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class RoutingModule { }

