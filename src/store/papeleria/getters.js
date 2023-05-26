export function someGetter(/* state */) {}

export function catTipos(state) {
  return state.tipos.map((e) => {
    var obj = {};
    obj["value"] = e.id;
    obj["label"] = e.tipo;
    return obj;
  });
}

export function catEstados(state) {
  return state.estados.map((e) => {
    var obj = {};
    obj["value"] = e.id;
    obj["label"] = e.nombre;
    return obj;
  });
}
