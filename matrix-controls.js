(function () {
  "use strict";
  const buttons = document.querySelectorAll("[data-view]");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const view = button.dataset.view;
      document.querySelectorAll("[data-group]").forEach((element) => {
        element.hidden = view !== "all" && element.dataset.group !== view;
      });
      buttons.forEach((other) => other.setAttribute("aria-pressed", String(other === button)));
    });
  });
  document.getElementById("hide-toolbar-btn")?.addEventListener("click", () => {
    document.getElementById("control-bar").hidden = true;
  });
})();
