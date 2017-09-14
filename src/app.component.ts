import { Component } from '@angular/core';

@Component({
  selector: 'imc',
  template: `
    <label for="peso">Peso</label>
    <input id="peso" type="number" [(ngModel)]="peso">
    <label for="altura">Altura</label>
    <input id="altura" type="number" [(ngModel)]="altura">    
    <imc-calculator [(peso)]="peso" [(altura)]="altura"></imc-calculator>
  `
})

export class AppComponent {
    peso = 0;
    altura = 0;
}
