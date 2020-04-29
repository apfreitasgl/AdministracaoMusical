import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicasRoutingModule } from './musicas-routing.module';
 import { MusicasListagemComponent } from './musicas-listagem.component/musicas-listagem.component';




@NgModule({
  imports: [
    CommonModule,
    MusicasRoutingModule
  ],
  declarations: [MusicasListagemComponent],
  exports: [MusicasListagemComponent]
})
export class MusicasModule { }
