import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/NewsletterForm-Dy-go7jV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function NewsletterForm({ variant = "primary", placeholder = "tu@correo.com", cta = "Suscribirme" }) {
	const [email, setEmail] = (0, import_react.useState)("");
	const [sent, setSent] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: `so-form so-form--${variant}`,
		onSubmit: (e) => {
			e.preventDefault();
			if (!email) return;
			setSent(true);
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type: "email",
			required: true,
			value: email,
			onChange: (e) => setEmail(e.target.value),
			placeholder,
			"aria-label": "Correo electrónico"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "submit",
			children: sent ? "¡Listo! ✦" : cta
		})]
	});
}
//#endregion
export { NewsletterForm as t };
