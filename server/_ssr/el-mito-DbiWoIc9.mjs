import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/el-mito-DbiWoIc9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Redirect() {
	(0, import_react.useEffect)(() => {
		window.location.replace("/site/index.html");
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		style: {
			minHeight: "100vh",
			background: "#0a0f0d",
			color: "#f2ede0",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			fontFamily: "system-ui"
		},
		children: "Cargando El Mito…"
	});
}
//#endregion
export { Redirect as component };
