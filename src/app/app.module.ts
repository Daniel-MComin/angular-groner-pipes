import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './cursos/first-component/first-component.component';
import { DataParentComponent } from './cursos/data-parent/data-parent.component';
import { ContadorComponent } from './cursos/contador/contador.component';
import { DiretivasComponent } from './cursos/diretivas/diretivas.component';
import { FundoAmareloDirective } from './cursos/diretivas-elementRef/fundo-amarelo.directive';
import { DiretivasCostumizadasComponent } from './cursos/diretivas-costumizadas/diretivas-costumizadas.component';
import { HighlightMouseDirective } from './cursos/highlight-mouse/highlight-mouse.directive';
import { NgElseDirective } from './cursos/ngElse/ng-else.directive';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    DataParentComponent,
    ContadorComponent,
    DiretivasComponent,
    FundoAmareloDirective,
    DiretivasCostumizadasComponent,
    HighlightMouseDirective,
    NgElseDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
