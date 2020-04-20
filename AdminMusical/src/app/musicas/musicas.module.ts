import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MusicasRoutingModule } from './musicas-routing.module';
import { MusicasListagemComponent } from './musicas-listagem.component/musicas-listagem.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MusicasRoutingModule
  ],
  declarations: [
    MusicasListagemComponent
  ]
})
export class MusicasModule { }
