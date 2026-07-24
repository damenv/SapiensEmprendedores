import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SiteNav, t as SiteFooter } from "./SiteFooter-BkfJkPHR.mjs";
import { t as NewsletterForm } from "./NewsletterForm-Dy-go7jV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BBv3sMP7.js
var import_jsx_runtime = require_jsx_runtime();
var startHere = [
	{
		title: "El Mito",
		desc: "Descubre la historia detrás de Sapiens Optimizado — el viaje del héroe que no sacrifica lo que ama.",
		href: "/el-mito",
		cta: "Vivir la historia",
		external: true
	},
	{
		title: "Programas",
		desc: "Mentorías y masterclasses diseñadas para llevarte al siguiente nivel sin quemarte en el intento.",
		href: "/programas",
		cta: "Ver programas"
	},
	{
		title: "Substack",
		desc: "Ensayos, reflexiones y episodios semanales sobre movimiento, nutrición, sexualidad y propósito.",
		href: "/substack",
		cta: "Leer última edición"
	}
];
var featured = [
	{
		tag: "Ensayo",
		title: "El precio invisible del éxito",
		desc: "Por qué los héroes modernos regresan heridos — y cómo cambiar la ecuación."
	},
	{
		tag: "Guía",
		title: "5 Pilares del Sapiens Optimizado",
		desc: "Movimiento, comunicación, estilo de vida, nutrición y sexualidad en un solo mapa."
	},
	{
		tag: "Podcast",
		title: "Conversación con David Meneses",
		desc: "Sobre entrenamiento, disciplina y el arte de sostener una vida coherente."
	}
];
var testimonials = [
	{
		quote: "Sentí que por primera vez alguien entendía que quería crecer sin sacrificar mi salud ni mi familia.",
		name: "Laura M.",
		role: "Emprendedora"
	},
	{
		quote: "La mentoría cambió la forma en que veo mi cuerpo, mis relaciones y mi trabajo. Todo empezó a alinearse.",
		name: "Andrés R.",
		role: "Director creativo"
	},
	{
		quote: "Los 5 pilares me dieron un mapa claro. Dejé de sentirme fragmentado.",
		name: "Camila S.",
		role: "Profesional de la salud"
	}
];
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "so-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "so-hero",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "so-hero__bg" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "so-hero__inner",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "so-eyebrow",
								children: "Mentoría de Estilo de Vida Holística"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "so-hero__title",
								children: [
									"Conquista tu destino ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "sin sacrificar" }),
									" lo que amas."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "so-hero__sub",
								children: "Un camino diseñado para el héroe moderno: cuerpo, mente, relaciones y propósito operando como un solo sistema."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "so-hero__form",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewsletterForm, { cta: "Recibir la carta semanal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "so-hero__hint",
									children: "Únete a la comunidad · Sin spam · Cancela cuando quieras"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "so-hero__scroll",
						children: "Descender ↓"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "so-section",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "so-container",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "so-section__head",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "so-eyebrow",
								children: "Empieza aquí"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "so-h2",
								children: "Tres puertas de entrada"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "so-lede",
								children: "Escoge por dónde quieres comenzar tu recorrido dentro de Sapiens Optimizado."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "so-grid so-grid--3",
						children: startHere.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "so-card",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: c.title }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: c.desc }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: c.href,
									className: "so-card__link",
									children: [c.cta, " →"]
								})
							]
						}, c.title))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "so-section so-section--alt",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "so-container",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "so-section__head so-section__head--split",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "so-eyebrow",
							children: "Lo más reciente"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "so-h2",
							children: "Episodios y guías destacadas"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/recursos",
							className: "so-link",
							children: "Ver todos los recursos →"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "so-grid so-grid--3",
						children: featured.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "so-feature",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "so-feature__tag",
									children: f.tag
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: f.title }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: f.desc }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/recursos",
									className: "so-card__link",
									children: "Explorar →"
								})
							]
						}, f.title))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "so-section",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "so-container",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "so-section__head",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "so-eyebrow",
								children: "Prueba social"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "so-h2",
								children: "Historias de quienes ya caminan el sendero"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "so-grid so-grid--3",
							children: testimonials.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
								className: "so-quote",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									"“",
									t.quote,
									"”"
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: t.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.role })] })]
							}, t.name))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "so-logos",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Featured in" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Substack" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Podcast Network" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Wellness MX" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Holistic Living" })
							] })]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "so-cta-band",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "so-container so-cta-band__inner",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "so-eyebrow",
							children: "Newsletter semanal"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "so-h2",
							children: "Una carta que te devuelve al centro."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "so-lede",
							children: "Cada domingo, una idea aplicable sobre los 5 pilares. Directo a tu bandeja."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewsletterForm, {
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
export { Home as component };
