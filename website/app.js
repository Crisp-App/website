(function () {
  const config = window.CRISP_SITE_CONFIG || {};
  const link = document.getElementById("app-store-link");
  const note = document.getElementById("app-store-note");

  if (!link) return;

  const url = (config.appStoreURL || "").trim();
  if (url) {
    link.href = url;
    link.removeAttribute("aria-disabled");
    link.classList.remove("is-disabled");
    if (note) note.textContent = "Available on iPhone.";
  } else {
    link.href = "#download";
    link.setAttribute("aria-disabled", "true");
    link.classList.add("is-disabled");
    if (note) note.textContent = "Coming soon to the App Store — link updates automatically when you set appStoreURL in site-config.js.";
  }

  const email = (config.contactEmail || "").trim();
  document.querySelectorAll("[data-contact-email]").forEach((node) => {
    if (email) {
      node.textContent = email;
      if (node.tagName === "A") node.href = "mailto:" + email;
    }
  });
})();
