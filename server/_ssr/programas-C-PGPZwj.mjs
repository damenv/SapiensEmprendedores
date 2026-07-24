import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as SiteNav, t as SiteFooter } from "./SiteFooter-BkfJkPHR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/programas-C-PGPZwj.js
var import_jsx_runtime = require_jsx_runtime();
var programs = [
	{
		name: "Mentoría 1:1",
		price: "Inversión personalizada",
		tag: "Insignia",
		desc: "Acompañamiento profundo durante 12 semanas para rediseñar cuerpo, hábitos y propósito.",
		features: [
			"Sesiones semanales privadas",
			"Plan de movimiento y nutrición",
			"WhatsApp directo con tu mentor",
			"Auditoría de estilo de vida"
		]
	},
	{
		name: "Círculo Sapiens",
		price: "Mensualidad",
		tag: "Comunidad",
		desc: "Membresía grupal con clases en vivo, comunidad activa y un currículum vivo sobre los 5 pilares.",
		features: [
			"2 sesiones grupales al mes",
			"Biblioteca de masterclasses",
			"Comunidad privada",
			"Retos trimestrales"
		]
	},
	{
		name: "Masterclass Intensivas",
		price: "Desde $49 USD",
		tag: "Autoguiado",
		desc: "Cursos digitales cortos para dominar un pilar a la vez: movimiento, nutrición, sexualidad, comunicación o estilo de vida.",
		features: [
			"Acceso de por vida",
			"Ejercicios y plantillas",
			"Cápsulas de 20 minutos",
			"Certificado de finalización"
		]
	}
];
function Programas() {
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
							children: "Programas"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "so-h1",
							children: "Caminos para integrar los 5 pilares."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "so-lede",
							children: "Diseñados para el héroe moderno que quiere resultados sin sacrificar su cuerpo, sus relaciones ni su tiempo."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "so-section",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "so-container",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "so-grid so-grid--3",
						children: programs.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "so-program",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "so-feature__tag",
									children: p.tag
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: p.name }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "so-program__price",
									children: p.price
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p.desc }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: p.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: f }, f)) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#contacto",
									className: "so-btn so-btn--ghost",
									children: "Saber más →"
								})
							]
						}, p.name))
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { Programas as component };
