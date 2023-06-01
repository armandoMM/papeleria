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

export async function getMarcas(context, payload) {
  try {
    payload.path = `marcas/all`;
    let res = await factoryApis.get(payload);
    context.commit("SET_ALL_MARCAS", res.data);
  } catch (error) {
    throw error;
  }
}

export async function addMarca(context, payload) {
  try {
    payload.path = "marcas";
    let res = await factoryApis.post(payload);
    return res;
  } catch (error) {
    throw error;
  }
}

export async function updateMarca(context, payload) {
  try {
    payload.path = `marcas/update-marca`;
    let res = await factoryApis.post(payload);
    return res;
  } catch (error) {
    throw error;
  }
}

export async function deleteMarca(context, payload) {
  try {
    payload.path = `marcas/delete-marca`;
    let res = await factoryApis.post(payload);
  } catch (error) {
    throw error;
  }
}

export async function getCategorias(context, payload) {
  try {
    payload.path = `categorias/all`;
    let res = await factoryApis.get(payload);
    context.commit("SET_ALL_CATEGORIAS", res.data);
  } catch (error) {
    throw error;
  }
}

export async function addCategoria(context, payload) {
  try {
    payload.path = "categorias";
    let res = await factoryApis.post(payload);
    return res;
  } catch (error) {
    throw error;
  }
}

export async function updateCategoria(context, payload) {
  try {
    payload.path = `categorias/update-categoria`;
    let res = await factoryApis.post(payload);
    return res;
  } catch (error) {
    throw error;
  }
}

export async function deleteCategoria(context, payload) {
  try {
    payload.path = `categorias/delete-categoria`;
    let res = await factoryApis.post(payload);
  } catch (error) {
    throw error;
  }
}

export async function getProveedores(context, payload) {
  try {
    payload.path = `proveedores/all`;
    let res = await factoryApis.get(payload);
    context.commit("SET_ALL_PROVEEDORES", res.data);
  } catch (error) {
    throw error;
  }
}

export async function addProveedor(context, payload) {
  try {
    payload.path = "proveedores";
    let res = await factoryApis.post(payload);
    return res;
  } catch (error) {
    throw error;
  }
}

export async function updateProveedor(context, payload) {
  try {
    payload.path = `proveedores/update-proveedor`;
    let res = await factoryApis.post(payload);
    return res;
  } catch (error) {
    throw error;
  }
}

export async function deleteProveedor(context, payload) {
  try {
    payload.path = `proveedores/delete-proveedor`;
    let res = await factoryApis.post(payload);
  } catch (error) {
    throw error;
  }
}
