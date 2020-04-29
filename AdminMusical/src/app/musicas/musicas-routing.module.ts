import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';



import { MusicasListagemComponent } from './musicas-listagem.component/musicas-listagem.component';



const musicasRoutes: Routes = [
  { path: '', component: MusicasListagemComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(musicasRoutes)],
    exports: [ RouterModule ]
})
export class MusicasRoutingModule {

}
