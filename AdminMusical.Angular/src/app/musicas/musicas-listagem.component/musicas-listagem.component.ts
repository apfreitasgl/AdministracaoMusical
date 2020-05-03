import { Component, OnInit } from '@angular/core';
import { Musica } from 'src/app/Modelo/musica';

@Component({
  selector: 'listagem-musicas',
  templateUrl: './musicas-listagem.component.html'
})
export class MusicasListagemComponent implements OnInit {
  musicas: Array<Musica> =  [
    { "nome": "Não há ninguém como tu",
      "interprete": "Santa Geração",
      "album": "Faz-me Fluir",
      "audio": "nenhum",
      "tonalidade": "E"
    },
    { "nome": "Não há ninguém como tu",
      "interprete": "Santa Geração",
      "album": "Faz-me Fluir",
      "audio": "nenhum",
      "tonalidade": "E"
    },
    { "nome": "Não há ninguém como tu",
      "interprete": "Santa Geração",
      "album": "Faz-me Fluir",
      "audio": "nenhum",
      "tonalidade": "E"
    },
    { "nome": "Não há ninguém como tu",
      "interprete": "Santa Geração",
      "album": "Faz-me Fluir",
      "audio": "nenhum",
      "tonalidade": "E"
    },
    { "nome": "Não há ninguém como tu",
      "interprete": "Santa Geração",
      "album": "Faz-me Fluir",
      "audio": "nenhum",
      "tonalidade": "E"
    },
    { "nome": "Não há ninguém como tu",
      "interprete": "Santa Geração",
      "album": "Faz-me Fluir",
      "audio": "nenhum",
      "tonalidade": "E"
    },
    { "nome": "Não há ninguém como tu",
      "interprete": "Santa Geração",
      "album": "Faz-me Fluir",
      "audio": "nenhum",
      "tonalidade": "E"
    },
    { "nome": "Não há ninguém como tu",
      "interprete": "Santa Geração",
      "album": "Faz-me Fluir",
      "audio": "nenhum",
      "tonalidade": "E"
    },
    { "nome": "Não há ninguém como tu",
      "interprete": "Santa Geração",
      "album": "Faz-me Fluir",
      "audio": "nenhum",
      "tonalidade": "E"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
