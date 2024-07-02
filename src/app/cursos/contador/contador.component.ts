import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
  @Input() valor = 0;

  @Output() mudouValor = new EventEmitter();

  incrementa(){
    this.valor++
    this.mudouValor.emit({novoValor: this.valor})
  }
  decrementa(){
    this.valor--
    this.mudouValor.emit({novoValor: this.valor})
  }
}
