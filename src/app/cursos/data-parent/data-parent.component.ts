import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-parent',
  templateUrl: './data-parent.component.html',
  styleUrl: './data-parent.component.css'
})

export class DataParentComponent {
  @Input() nome :string = ''
 
  valorInicial = 50;

  onMudouValor(evento: { novoValor: number; }){
    console.log(evento.novoValor)
  }
}
