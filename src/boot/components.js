import { boot } from "quasar/wrappers";
import EssentialLink from "src/components/EssentialLink";
import ATable from "src/components/ATable";

export default boot(({ app }) => {
  // Set global components on app
  app.component("essential-link", EssentialLink);
  app.component("a-table", ATable);
});
