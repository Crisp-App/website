(function () {
  const config = window.CRISP_SITE_CONFIG || {};
  const email = (config.contactEmail || "").trim();
  document.querySelectorAll("[data-contact-email]").forEach((node) => {
    if (email) {
      node.textContent = email;
      if (node.tagName === "A") node.href = "mailto:" + email;
    }
  });
})();
