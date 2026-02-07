(function () {
  "use strict";

  // Theme: dark / light (default: light)
  const THEME_KEY = "skillverse-theme";

  function getStoredTheme() {
    return localStorage.getItem(THEME_KEY);
  }

  function setTheme(theme) {
    if (theme === "dark" || theme === "light") {
      document.documentElement.setAttribute("data-theme", theme === "dark" ? "dark" : "");
      localStorage.setItem(THEME_KEY, theme);
      updateThemeToggleIcon(theme);
    }
  }

  function updateThemeToggleIcon(theme) {
    const btn = document.getElementById("theme-toggle");
    if (!btn) return;
    const icon = btn.querySelector("i");
    if (icon) {
      icon.className = theme === "dark" ? "bi bi-sun-fill" : "bi bi-moon-fill";
    }
    btn.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
  }

  function initTheme() {
    const stored = getStoredTheme();
    const theme = stored || "light";
    setTheme(theme);
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "dark" ? "light" : "dark");
  }

  // Run on DOM ready
  document.addEventListener("DOMContentLoaded", function () {
    initTheme();

    const themeBtn = document.getElementById("theme-toggle");
    if (themeBtn) themeBtn.addEventListener("click", toggleTheme);

    // Contact form: prevent default and show a simple message (static site)
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        var submitBtn = contactForm.querySelector('button[type="submit"]');
        var originalText = submitBtn ? submitBtn.textContent : "Send";
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent = "Sending…";
        }
        setTimeout(function () {
          alert("Thank you for your message. We will get back to you soon!");
          contactForm.reset();
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
          }
        }, 600);
      });
    }
  });
})();
