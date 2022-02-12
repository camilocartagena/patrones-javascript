class MiClase {
  constructor() {
    this.propiedad = 1;
    this.metodo = () => {
      // soy el metodo
    };
  }
}

const instancia = new MiClase();
console.log(instancia);

class MiClaseValores {
  constructor(p1) {
    this.propiedad = p1;
  }
}

const instanciaValor = new MiClaseValores(4);
console.log(instanciaValor);
