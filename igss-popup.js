(function () {
  var STORAGE_KEY = "igss-popup-seen";

  document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem(STORAGE_KEY)) return;

    var isSoPage = document.body.classList.contains("so-page");
    var btnClass = isSoPage ? "so-btn" : "cta-mini";
    var pathSegments = window.location.pathname.split("/").filter(Boolean);
    var atRoot = pathSegments.length === 0;
    var recursosIgssHref = atRoot ? "./recursos-igss/" : "../recursos-igss/";

    var overlay = document.createElement("div");
    overlay.className = "igss-popup";
    overlay.innerHTML =
      '<div class="igss-popup__card" role="dialog" aria-modal="true" aria-label="Bienvenida IGSS">' +
        '<button type="button" class="igss-popup__close" aria-label="Cerrar">&times;</button>' +
        '<p class="igss-popup__eyebrow">IGSS</p>' +
        '<h2 class="igss-popup__title">¡Bienvenido/a!</h2>' +
        '<p class="igss-popup__body">Gracias por asistir a la presentación en el IGSS. Preparé una página con las slides y los recursos que mencioné, lista para ti.</p>' +
        '<div class="igss-popup__actions">' +
          '<a href="' + recursosIgssHref + '" class="' + btnClass + '">Ver Recursos IGSS</a>' +
          '<button type="button" class="igss-popup__link">Seguir explorando el sitio</button>' +
        '</div>' +
      '</div>';

    document.body.appendChild(overlay);

    function close() {
      overlay.classList.remove("is-visible");
      localStorage.setItem(STORAGE_KEY, "1");
      setTimeout(function () { overlay.remove(); }, 300);
    }

    overlay.querySelector(".igss-popup__close").addEventListener("click", close);
    overlay.querySelector(".igss-popup__link").addEventListener("click", close);
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) close();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });

    requestAnimationFrame(function () {
      overlay.classList.add("is-visible");
    });
  });
})();
