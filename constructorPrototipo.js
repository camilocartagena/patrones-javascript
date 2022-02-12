class MiClase {
  constructor(p1, p2) {
    this.propiedad = p1;
    this.propiedad2 = p2;

    this.metodo = () => {
      // soy el metodo
    };
  }
}

const instancia = new MiClase(4, 2);
console.log(instancia.__proto__);

Object.prototype.log = function () {
  console.log(this);
};

const x = { a: 1 };
x.log();
