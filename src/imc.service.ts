export class ImcService {

  getImc(peso: number, altura: number) {
    return peso/(altura*altura);
  }
}
