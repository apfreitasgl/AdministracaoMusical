import { Musica } from './Modelo/musica';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  musicas: Array<Musica> = [ 
    { 
      "nome": "Não há ninguém como tu",
      "interprete": "Santa Geração",
      "album": "Faz-me Fluir",
      "audio": "nenhum",
      "tonalidade": "E" 
    },{ 
      "nome": "Não há ninguém como tu",
      "interprete": "Santa Geração",
      "album": "Faz-me Fluir",
      "audio": "nenhum",
      "tonalidade": "E" 
    },{ 
      "nome": "Não há ninguém como tu",
      "interprete": "Santa Geração",
      "album": "Faz-me Fluir",
      "audio": "nenhum",
      "tonalidade": "E" 
    },{ 
      "nome": "Não há ninguém como tu",
      "interprete": "Santa Geração",
      "album": "Faz-me Fluir",
      "audio": "nenhum",
      "tonalidade": "E" 
    },{ 
      "nome": "Não há ninguém como tu",
      "interprete": "Santa Geração",
      "album": "Faz-me Fluir",
      "audio": "nenhum",
      "tonalidade": "E" 
    },{ 
      "nome": "Não há ninguém como tu",
      "interprete": "Santa Geração",
      "album": "Faz-me Fluir",
      "audio": "nenhum",
      "tonalidade": "E" 
    },{ 
      "nome": "Não há ninguém como tu",
      "interprete": "Santa Geração",
      "album": "Faz-me Fluir",
      "audio": "nenhum",
      "tonalidade": "E" 
    },{ 
      "nome": "Não há ninguém como tu",
      "interprete": "Santa Geração",
      "album": "Faz-me Fluir",
      "audio": "nenhum",
      "tonalidade": "E" 
    },{ 
      "nome": "Não há ninguém como tu",
      "interprete": "Santa Geração",
      "album": "Faz-me Fluir",
      "audio": "nenhum",
      "tonalidade": "E" 
    },{ 
      "nome": "Não há ninguém como tu",
      "interprete": "Santa Geração",
      "album": "Faz-me Fluir",
      "audio": "nenhum",
      "tonalidade": "E" 
    },{ 
      "nome": "Não há ninguém como tu",
      "interprete": "Santa Geração",
      "album": "Faz-me Fluir",
      "audio": "nenhum",
      "tonalidade": "E" 
    },{ 
      "nome": "Não há ninguém como tu",
      "interprete": "Santa Geração",
      "album": "Faz-me Fluir",
      "audio": "nenhum",
      "tonalidade": "E" 
    },{ 
      "nome": "Não há ninguém como tu",
      "interprete": "Santa Geração",
      "album": "Faz-me Fluir",
      "audio": "nenhum",
      "tonalidade": "E" 
    }
  ];

  ngOnInit(): void {
  }
}
