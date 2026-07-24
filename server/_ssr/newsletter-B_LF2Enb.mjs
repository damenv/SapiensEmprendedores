import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as SiteNav, t as SiteFooter } from "./SiteFooter-BkfJkPHR.mjs";
import { t as NewsletterForm } from "./NewsletterForm-Dy-go7jV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/newsletter-B_LF2Enb.js
var import_jsx_runtime = require_jsx_runtime();
var benefits = [
	"Una idea aplicable cada domingo, en menos de 5 minutos de lectura.",
	"Acceso anticipado a nuevos programas y masterclasses.",
	"Herramientas y plantillas exclusivas para suscriptores.",
	"Preguntas de reflexión para integrar cada carta en tu semana."
];
var pastEditions = [
	{
		title: "El precio invisible del éxito",
		desc: "Por qué los héroes modernos regresan heridos de sus batallas."
	},
	{
		title: "Movimiento como identidad",
		desc: "Cómo dejar de ver el ejercicio como tarea y empezar a habitarlo."
	},
	{
		title: "Conversaciones difíciles",
		desc: "El pilar de la comunicación en tus relaciones más importantes."
	},
	{
		title: "Nutrición sin dogma",
		desc: "Principios estables en un mundo lleno de dietas de moda."
	}
];
function Newsletter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "so-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "so-pageHero so-pageHero--center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "so-container",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "so-eyebrow",
							children: "Newsletter"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "so-h1",
							children: ["Una carta semanal que te devuelve ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "al centro." })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "so-lede",
							children: "Cada domingo recibes una idea aplicable sobre movimiento, comunicación, estilo de vida, nutrición y sexualidad."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "so-hero__form",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewsletterForm, { cta: "Quiero recibirla" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "so-hero__hint",
								children: "Gratis · Sin spam · Cancela cuando quieras"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "so-section",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "so-container so-grid so-grid--2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "so-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Qué obtienes al suscribirte" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "so-list",
							children: benefits.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: b }, b))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "so-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Ediciones recientes" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "so-list so-list--plain",
							children: pastEditions.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: e.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: e.desc })] }, e.title))
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "so-cta-band",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "so-container so-cta-band__inner",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "so-eyebrow",
						children: "Únete hoy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "so-h2",
						children: "Empieza a caminar el sendero."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewsletterForm, {
						variant: "inline",
						cta: "Suscribirme"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { Newsletter as component };
