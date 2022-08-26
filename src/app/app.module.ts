import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { InformacaoComponent } from './informacao/informacao.component';
import { LocalizacaoComponent } from './localizacao/localizacao.component';
import { ContatoComponent } from './contato/contato.component';
import { PropagandaComponent } from './propaganda/propaganda.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    InformacaoComponent,
    LocalizacaoComponent,
    ContatoComponent,
    PropagandaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
