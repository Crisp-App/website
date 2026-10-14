(function () {
  const config = window.CRISP_SITE_CONFIG || {};
  const defaultStoreURL = "https://apps.apple.com/app/crisp/id6797441105";
  const links = [
    document.getElementById("app-store-link"),
    document.getElementById("app-store-link-footer"),
  ].filter(Boolean);
  const note = document.getElementById("app-store-note");

  const configured = (config.appStoreURL || "").trim();
  const url = configured || defaultStoreURL;

  links.forEach(function (link) {
    link.href = url;
    link.removeAttribute("aria-disabled");
    link.classList.remove("is-disabled");
  });

  if (note && url) {
    note.textContent = "Available on the App Store for iPhone and iPad.";
  } else if (note) {
    note.textContent = "Coming soon to the App Store.";
  }

  if (!links.length) return;

  const email = (config.contactEmail || "").trim();
  document.querySelectorAll("[data-contact-email]").forEach((node) => {
    if (email) {
      node.textContent = email;
      if (node.tagName === "A") node.href = "mailto:" + email;
    }
  });
})();
