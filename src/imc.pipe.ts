import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'imc'})
export class ImcPipe implements PipeTransform {

  transform(value: number) {
    if(value != 0 && value < 17){
      return 'Muito abaixo do peso';
    }else if(value > 17 && value < 18.49){
      return 'Abaixo do peso';
    }else if(value > 18.5 && value < 24.99){
      return 'Peso normal';
    }else if(value > 25 && value < 29.99){
      return 'Acima do peso';
    }else if(value > 30 && value < 34.99){
      return 'Obesidade I';
    }else if(value > 35 && value < 39.99){
      return 'Obesidade II (severa)';
    }else if(value > 40){
      return 'Obesidade III (mórbida)';
    }
    return 'Informe o peso e altura!';
  }
  
}
