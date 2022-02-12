const modulo = {
  prop: "mi pro",
  config: {
    lenguaje: "es",
    cache: true,
  },
  setConfig: (conf) => {
    modulo.config = conf;
  },
  isCacheEnable: () => {
    console.log(modulo.config.cache ? "si" : "no");
    console.log(modulo.config);
  },
};

const miConfig = {
  lenguaje: "es",
  cache: false,
};

modulo.setConfig(miConfig);

modulo.isCacheEnable();
