import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { ListagemMusicasComponent } from './musicas/listagem-musicas.component/listagem-musicas.component';


@NgModule({
  declarations: [
    AppComponent,
    ListagemMusicasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
