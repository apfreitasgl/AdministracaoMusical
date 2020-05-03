import { Component, OnInit } from '@angular/core';
import { Musica } from 'src/app/Modelo/musica';

@Component({
  selector: 'listagem-musicas',
  templateUrl: './musicas-listagem.component.html'
})
export class MusicasListagemComponent implements OnInit {
  musicas: Array<Musica> = [];

  constructor() { }

  ngOnInit(): void {
    const musica = new Musica();
    musica.nome = 'Não há ninguém como tu';
    musica.interprete = 'Santa Geração';
    musica.album = 'Faz-me Fluir';
    musica.audio = 'nenhum';
    musica.tonalidade = 'E';
    this.musicas.push(musica);
  }

}
