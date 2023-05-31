import { Notify } from "quasar";

export function showMsg(type = "ok", msg = null) {
  if (!msg) return;
  let opc = {};

  opc["color"] = type == "error" ? "red" : "accent";
  opc["group"] = type;
  opc["message"] = msg;
  opc["position"] = "top";
  opc["classes"] = "elevate-notify";
  console.log("se muestra nofity");
  Notify.create(opc);
}
