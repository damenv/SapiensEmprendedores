import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SiteFooter-BkfJkPHR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var links = [
	{
		to: "/",
		label: "Inicio"
	},
	{
		to: "/el-mito",
		label: "El Mito"
	},
	{
		to: "/programas",
		label: "Programas"
	},
	{
		to: "/recursos",
		label: "Recursos"
	},
	{
		to: "/substack",
		label: "Substack"
	},
	{
		to: "/newsletter",
		label: "Newsletter"
	}
];
function SiteNav() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `so-nav ${scrolled ? "so-nav--solid" : ""}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "so-nav__brand",
				onClick: () => setOpen(false),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/site/img/eye-logo.png",
					alt: ""
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["SAPIENS", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "OPTIMIZADO" })] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: `so-nav__links ${open ? "is-open" : ""}`,
				children: [links.map((l) => l.to === "/el-mito" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/el-mito",
					onClick: () => setOpen(false),
					className: "so-nav__link",
					children: l.label
				}, l.to) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: l.to,
					onClick: () => setOpen(false),
					className: "so-nav__link",
					activeProps: { className: "so-nav__link is-active" },
					activeOptions: { exact: l.to === "/" },
					children: l.label
				}, l.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/newsletter",
					onClick: () => setOpen(false),
					className: "so-nav__cta",
					children: "Unirme al Newsletter"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				className: "so-nav__burger",
				"aria-label": "Menú",
				"aria-expanded": open,
				onClick: () => setOpen((v) => !v),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
				]
			})
		]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "so-footer",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "so-footer__inner",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/site/img/eye-logo.png",
					alt: "Sapiens Optimizado"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "SAPIENS OPTIMIZADO — Mentoría de Estilo de Vida Holística" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "so-footer__nav",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							children: "Inicio"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/el-mito",
							children: "El Mito"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/programas",
							children: "Programas"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/recursos",
							children: "Recursos"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/substack",
							children: "Substack"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/newsletter",
							children: "Newsletter"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "so-footer__muted",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Todos los derechos reservados."
					]
				})
			]
		})
	});
}
//#endregion
export { SiteNav as n, SiteFooter as t };
