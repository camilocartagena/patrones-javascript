const y = "lele";
const f = () => {
  const x = "lala";
  console.log(x, y);
};

// alcance lexico privado
f();

// alcance lexico global
console.log(y);
