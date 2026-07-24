import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as SiteNav, t as SiteFooter } from "./SiteFooter-BkfJkPHR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/recursos-HheBcsK9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var filters = [
	"Todos",
	"Guías",
	"Herramientas",
	"Lecturas"
];
var items = [
	{
		title: "Guía de los 5 Pilares",
		type: "Guías",
		desc: "PDF con auditoría rápida para diagnosticar en qué pilar necesitas enfoque hoy."
	},
	{
		title: "Plantilla de Semana Optimizada",
		type: "Herramientas",
		desc: "Hoja editable para diseñar tu semana alrededor de movimiento, descanso y trabajo profundo."
	},
	{
		title: "Lista de lecturas fundamentales",
		type: "Lecturas",
		desc: "Libros que han moldeado la filosofía Sapiens Optimizado."
	},
	{
		title: "Protocolo de Movimiento Diario",
		type: "Guías",
		desc: "15 minutos al día para mantener el cuerpo del héroe."
	},
	{
		title: "Journal del Sapiens",
		type: "Herramientas",
		desc: "Prompts diarios para claridad, propósito y relaciones."
	},
	{
		title: "Ensayos seleccionados",
		type: "Lecturas",
		desc: "Colección curada de textos sobre coherencia y estilo de vida."
	}
];
function Recursos() {
	const [filter, setFilter] = (0, import_react.useState)("Todos");
	const list = (0, import_react.useMemo)(() => filter === "Todos" ? items : items.filter((i) => i.type === filter), [filter]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "so-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "so-pageHero",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "so-container",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "so-eyebrow",
							children: "Recursos"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "so-h1",
							children: "Herramientas para el camino."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "so-lede",
							children: "Descargables y lecturas para aplicar Sapiens Optimizado en tu vida diaria."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "so-section",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "so-container",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "so-filters",
						children: filters.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: `so-chip ${filter === f ? "is-active" : ""}`,
							onClick: () => setFilter(f),
							children: f
						}, f))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "so-grid so-grid--3",
						children: list.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "so-card",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "so-feature__tag",
									children: i.type
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: i.title }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: i.desc }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									className: "so-card__link",
									children: "Descargar →"
								})
							]
						}, i.title))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { Recursos as component };
