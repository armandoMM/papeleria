import { Notify } from "quasar";

export function showMsg(type = "ok", msg = null) {
  if (!msg) return;
  let opc = {};

  opc["color"] = type == "error" ? "red" : "green";

  opc["message"] = msg;
  opc["position"] = "top";
  Notify.create(opc);
}
