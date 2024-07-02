import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrl: './diretivas.component.css'
})
export class DiretivasComponent {

  mostrarCursos: boolean = false;

  onMostrarCursos(){
    this.mostrarCursos = !this.mostrarCursos
  }

  aba: string = 'home'

  cursos: string[] = ['JavaScript', 'Angular', 'Java']

  meuFavorito: boolean = false;

  onClick(){
    this.meuFavorito = !this.meuFavorito;
  }

  ativo: boolean = false;

  mudarAtivo(){
    this.ativo = !this.ativo;
  }
}
