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

export function SET_ALL_MARCAS(state, payload) {
  state.marcas = payload;
}

export function SET_SELECTED_MARCA(state, payload) {
  state.marcaSelected = payload;
}
export function SET_ALL_CATEGORIAS(state, payload) {
  state.categorias = payload;
}

export function SET_SELECTED_CATEGORIA(state, payload) {
  state.categoriaSelected = payload;
}

export function SET_ALL_PROVEEDORES(state, payload) {
  state.proveedores = payload;
}

export function SET_SELECTED_PROVEEDOR(state, payload) {
  state.proveedorSelected = payload;
}
