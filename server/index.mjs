globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/.DS_Store": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"1804-n64i1SuA7BWX8E5oYa+qZAgDOcQ\"",
		"mtime": "2026-07-24T13:24:55.364Z",
		"size": 6148,
		"path": "../public/.DS_Store"
	},
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-07-24T13:24:55.365Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/assets/NewsletterForm-Dipq6U_u.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"21a-shg05mmQDJcSY7CLUNcD20WcniQ\"",
		"mtime": "2026-07-24T13:24:55.227Z",
		"size": 538,
		"path": "../public/assets/NewsletterForm-Dipq6U_u.js"
	},
	"/assets/SiteFooter-BZLWDBYD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8d9-0l2lXdtwMN8btla05Hb1RlqzTho\"",
		"mtime": "2026-07-24T13:24:55.227Z",
		"size": 2265,
		"path": "../public/assets/SiteFooter-BZLWDBYD.js"
	},
	"/assets/el-mito-fRq4fPbR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17c-WLgH30477Um2RU0d+u5Iy+glN6Q\"",
		"mtime": "2026-07-24T13:24:55.227Z",
		"size": 380,
		"path": "../public/assets/el-mito-fRq4fPbR.js"
	},
	"/assets/newsletter-BuYR5Z-Z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a2a-SW2R/py+9esFu8AlGcECT23gLts\"",
		"mtime": "2026-07-24T13:24:55.227Z",
		"size": 2602,
		"path": "../public/assets/newsletter-BuYR5Z-Z.js"
	},
	"/assets/recursos-DCBiowU0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"860-wmIx7LH/tAds9gk9itbp6cT/w2c\"",
		"mtime": "2026-07-24T13:24:55.227Z",
		"size": 2144,
		"path": "../public/assets/recursos-DCBiowU0.js"
	},
	"/assets/programas-NgC-HNzr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"86c-BVsDqK7cJD7ufQDW8R9FSGxzMYQ\"",
		"mtime": "2026-07-24T13:24:55.227Z",
		"size": 2156,
		"path": "../public/assets/programas-NgC-HNzr.js"
	},
	"/assets/routes-C3bY-wyM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1549-esYWbpM0eumzmZrYvFUFTnnO9wA\"",
		"mtime": "2026-07-24T13:24:55.227Z",
		"size": 5449,
		"path": "../public/assets/routes-C3bY-wyM.js"
	},
	"/assets/substack-ChJfY16l.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"87f-QWDrPVlT1kYyNDNJUjg4iwr0Gy8\"",
		"mtime": "2026-07-24T13:24:55.227Z",
		"size": 2175,
		"path": "../public/assets/substack-ChJfY16l.js"
	},
	"/assets/styles-CgeCvXxU.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1409e-+wrd2ZxHBxHcmJfDj5cNennLH1k\"",
		"mtime": "2026-07-24T13:24:55.227Z",
		"size": 82078,
		"path": "../public/assets/styles-CgeCvXxU.css"
	},
	"/assets/index-kJbi1kX-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"55059-OtroU+NhANM6hT+oxffWo86MTio\"",
		"mtime": "2026-07-24T13:24:55.226Z",
		"size": 348249,
		"path": "../public/assets/index-kJbi1kX-.js"
	},
	"/site/.DS_Store": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"1804-lZ6d2IwjW0tJJu2kYyfBMaxCrcs\"",
		"mtime": "2026-07-24T13:24:55.351Z",
		"size": 6148,
		"path": "../public/site/.DS_Store"
	},
	"/site/index.html": {
		"type": "text/html; charset=utf-8",
		"etag": "\"1d5d-JO29vRn+OVwSlfBBJiDDJg01FkA\"",
		"mtime": "2026-07-24T13:24:55.351Z",
		"size": 7517,
		"path": "../public/site/index.html"
	},
	"/site/script.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b0e-QEGCjtVcytl3RU/4rP4kJGyx+B8\"",
		"mtime": "2026-07-24T13:24:55.351Z",
		"size": 2830,
		"path": "../public/site/script.js"
	},
	"/site/styles.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"2bdd-S7mnIuvnpke73RpkjNqGxiJIRuA\"",
		"mtime": "2026-07-24T13:24:55.351Z",
		"size": 11229,
		"path": "../public/site/styles.css"
	},
	"/site/img/02-hero-sword.jpg": {
		"type": "image/jpeg",
		"etag": "\"d198-Dqwge5VZ0gLNyJBo2WDRelf8vEI\"",
		"mtime": "2026-07-24T13:24:55.357Z",
		"size": 53656,
		"path": "../public/site/img/02-hero-sword.jpg"
	},
	"/site/img/03-unknown.jpg": {
		"type": "image/jpeg",
		"etag": "\"118bb-E9b/CsRaPenlVkCmHPMVGERzx88\"",
		"mtime": "2026-07-24T13:24:55.352Z",
		"size": 71867,
		"path": "../public/site/img/03-unknown.jpg"
	},
	"/site/img/04-heroine-dragon.jpg": {
		"type": "image/jpeg",
		"etag": "\"11887-EuJWKnjSs5MirZI5Ut9zI3+cdK8\"",
		"mtime": "2026-07-24T13:24:55.352Z",
		"size": 71815,
		"path": "../public/site/img/04-heroine-dragon.jpg"
	},
	"/site/img/05-healing-hand.jpg": {
		"type": "image/jpeg",
		"etag": "\"c4db-EVXkx6l24X1cfwKWlpfZW2x4Ui8\"",
		"mtime": "2026-07-24T13:24:55.352Z",
		"size": 50395,
		"path": "../public/site/img/05-healing-hand.jpg"
	},
	"/site/img/06-family-photo.jpg": {
		"type": "image/jpeg",
		"etag": "\"a6a8-LsA6Df9qzJ0Pb79vK7u9qKDdMSU\"",
		"mtime": "2026-07-24T13:24:55.352Z",
		"size": 42664,
		"path": "../public/site/img/06-family-photo.jpg"
	},
	"/site/img/01-eye-dimension.jpg": {
		"type": "image/jpeg",
		"etag": "\"10448-CiKk5Sm2wZj4yR2GwPtPg2Dvtr4\"",
		"mtime": "2026-07-24T13:24:55.351Z",
		"size": 66632,
		"path": "../public/site/img/01-eye-dimension.jpg"
	},
	"/site/img/07-abyss.jpg": {
		"type": "image/jpeg",
		"etag": "\"1bd11-cAxE0wrMrT4Qa0//nMKFBufaBAo\"",
		"mtime": "2026-07-24T13:24:55.352Z",
		"size": 113937,
		"path": "../public/site/img/07-abyss.jpg"
	},
	"/site/img/13-heroine-victory.jpg": {
		"type": "image/jpeg",
		"etag": "\"163e1-p7K/OneVKWvYJxtNlvXxRV2kvGg\"",
		"mtime": "2026-07-24T13:24:55.352Z",
		"size": 91105,
		"path": "../public/site/img/13-heroine-victory.jpg"
	},
	"/site/img/09-hero-looking-eye.jpg": {
		"type": "image/jpeg",
		"etag": "\"e26d-nOw0EOGMioeSxeJJnP802Jhqavc\"",
		"mtime": "2026-07-24T13:24:55.352Z",
		"size": 57965,
		"path": "../public/site/img/09-hero-looking-eye.jpg"
	},
	"/site/img/Recurso 13.png": {
		"type": "image/png",
		"etag": "\"1103-aJmKdqGVOIDmNV6SyPpqGMK7EPg\"",
		"mtime": "2026-07-24T13:24:55.352Z",
		"size": 4355,
		"path": "../public/site/img/Recurso 13.png"
	},
	"/site/img/ojosapiens1.png": {
		"type": "image/png",
		"etag": "\"2f07-dzfAb0jRE4N095C7ZSjv9a0Xy4I\"",
		"mtime": "2026-07-24T13:24:55.352Z",
		"size": 12039,
		"path": "../public/site/img/ojosapiens1.png"
	},
	"/site/img/ojosapiens2.png": {
		"type": "image/png",
		"etag": "\"135b-ieEOOcJ3QuUI5aXI+wWwaPwR1fo\"",
		"mtime": "2026-07-24T13:24:55.353Z",
		"size": 4955,
		"path": "../public/site/img/ojosapiens2.png"
	},
	"/site/img/ojosapiens3.png": {
		"type": "image/png",
		"etag": "\"2f32-C0N/3iOlrU7q2REmeLfXOD8q+ao\"",
		"mtime": "2026-07-24T13:24:55.364Z",
		"size": 12082,
		"path": "../public/site/img/ojosapiens3.png"
	},
	"/site/img/ojosapiens4.png": {
		"type": "image/png",
		"etag": "\"1ef7-g7W82D+UZB8TkOv4cUF+SyRhvYg\"",
		"mtime": "2026-07-24T13:24:55.353Z",
		"size": 7927,
		"path": "../public/site/img/ojosapiens4.png"
	},
	"/site/img/ojosapiens5.png": {
		"type": "image/png",
		"etag": "\"3295-PJudPtrHRkg4n6yPcVz649SLSZE\"",
		"mtime": "2026-07-24T13:24:55.353Z",
		"size": 12949,
		"path": "../public/site/img/ojosapiens5.png"
	},
	"/site/img/eye-logo.png": {
		"type": "image/png",
		"etag": "\"3bb7e-dEUGCzZuRZosFNG4JcyR74rNJD8\"",
		"mtime": "2026-07-24T13:24:55.354Z",
		"size": 244606,
		"path": "../public/site/img/eye-logo.png"
	},
	"/site/img/dragon.png": {
		"type": "image/png",
		"etag": "\"15be71-isuG0JVlc4vhWZUEldMCYXInCJI\"",
		"mtime": "2026-07-24T13:24:55.356Z",
		"size": 1425009,
		"path": "../public/site/img/dragon.png"
	},
	"/site/img/seccion2-guerrero.png": {
		"type": "image/png",
		"etag": "\"10e705-5Yo4OgHjUjxd9+GnkjMjRdQN79A\"",
		"mtime": "2026-07-24T13:24:55.356Z",
		"size": 1107717,
		"path": "../public/site/img/seccion2-guerrero.png"
	},
	"/site/img/seccion7-ojos.png": {
		"type": "image/png",
		"etag": "\"14e5df-J7a2ci7IArA0vFVxnmwy6wHtjg4\"",
		"mtime": "2026-07-24T13:24:55.363Z",
		"size": 1369567,
		"path": "../public/site/img/seccion7-ojos.png"
	},
	"/site/img/seccion5-heroeherido.png": {
		"type": "image/png",
		"etag": "\"18eb9b-qulscHhXq5pYlwt1E4R724zI3Vw\"",
		"mtime": "2026-07-24T13:24:55.363Z",
		"size": 1633179,
		"path": "../public/site/img/seccion5-heroeherido.png"
	},
	"/site/img/seccion6-abismo.png": {
		"type": "image/png",
		"etag": "\"1da943-OnNbBBuU5s8BuCkgjJnwjlNP3Ks\"",
		"mtime": "2026-07-24T13:24:55.364Z",
		"size": 1943875,
		"path": "../public/site/img/seccion6-abismo.png"
	},
	"/site/img/seccion1y2.png": {
		"type": "image/png",
		"etag": "\"2124a7-Ojiasm3il5svd5+KZ5xVc6aewWI\"",
		"mtime": "2026-07-24T13:24:55.357Z",
		"size": 2172071,
		"path": "../public/site/img/seccion1y2.png"
	},
	"/site/img/seccion3-portal.png": {
		"type": "image/png",
		"etag": "\"212e99-LugBP8PcN8zWJJ31lt/nqrazyWU\"",
		"mtime": "2026-07-24T13:24:55.358Z",
		"size": 2174617,
		"path": "../public/site/img/seccion3-portal.png"
	},
	"/site/img/seccion9-pilares.png": {
		"type": "image/png",
		"etag": "\"1e0b47-EIOqqgWqQ+FW3n+rx21wDTx/v48\"",
		"mtime": "2026-07-24T13:24:55.364Z",
		"size": 1968967,
		"path": "../public/site/img/seccion9-pilares.png"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_Y6ywuE = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_Y6ywuE
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
