export function someMutation(/* state */) {}

export function SET_USER(state, payload) {
  state.usuario = payload;
}

export function SET_SELECTED_USUARIO(state, payload) {
  state.usuarioSelected = payload;
}

export function SET_ALL_USUARIOS(state, payload) {
  state.usuarios = payload;
}
export function SET_CAT_ESTADOS(state, payload) {
  state.estados = payload;
}
export function SET_CAT_TIPOS(state, payload) {
  state.tipos = payload;
}
