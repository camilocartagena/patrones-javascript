const perro = {
  raza: "labrador",
  ladrar: function () {
    console.log(`Guau!, soy un ${this.raza}`);
  },
};

const tobby = Object.create(perro);
tobby.ladrar();

tobby.raza = "super perro";
tobby.ladrar();
