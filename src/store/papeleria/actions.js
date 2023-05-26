import factoryApis from "src/apis/apiFactory";

export function someAction(/* context */) {}

export async function login(context, payload) {
  try {
    payload.path = `usuarios`;
    let res = await factoryApis.get(payload);
    context.commit("SET_USER", res.data);
  } catch (error) {
    throw error;
  }
}

export async function getUsuarios(context, payload) {
  try {
    payload.path = `usuarios/all`;
    let res = await factoryApis.get(payload);
    context.commit("SET_ALL_USUARIOS", res.data);
  } catch (error) {
    throw error;
  }
}

export async function addUsuario(context, payload) {
  try {
    payload.path = "usuarios";
    let res = await factoryApis.post(payload);
    return res;
  } catch (error) {
    throw error;
  }
}

export async function updateUsuario(context, payload) {
  try {
    payload.path = `usuarios/update-user`;
    let res = await factoryApis.post(payload);
    return res;
  } catch (error) {
    throw error;
  }
}

export async function deleteUsuario(context, payload) {
  try {
    payload.path = `usuarios/delete-user`;
    let res = await factoryApis.post(payload);
  } catch (error) {
    throw error;
  }
}

export async function getEstados(context, payload) {
  try {
    payload.path = `estados`;
    let res = await factoryApis.get(payload);
    context.commit("SET_CAT_ESTADOS", res.data);
  } catch (error) {
    throw error;
  }
}

export async function getTipos(context, payload) {
  try {
    payload.path = `tipos`;
    let res = await factoryApis.get(payload);
    context.commit("SET_CAT_TIPOS", res.data);
  } catch (error) {
    throw error;
  }
}
