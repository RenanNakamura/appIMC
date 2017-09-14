import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ImcService } from './imc.service';

@Component({
  selector: 'imc-calculator',
  template: `
    <button (click)="calcularImc()">Calcular</button>
    <strong>{{imcCalculado}}</strong>
    <strong>({{imcCalculado | imc}})</strong>
  `
})
export class ImcCalculatorComponent {

  @Input() peso: number;
  @Input() altura: number;
  imcCalculado = 0;

  constructor(private imcService: ImcService) {
  }
  
  calcularImc(){
    this.imcCalculado = this.imcService.getImc(this.peso, this.altura);
  }

}
