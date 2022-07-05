import "./index.css";
import App from "./app";

(function () {
  const root = document.getElementById("root");
  const app = new App(root);
  const addButton = document.getElementById("add-button");

  // event listeners
  addButton.addEventListener("mousedown", () => {
    addButton.classList.add("on-press");
  });
  addButton.addEventListener("mouseup", () => {
    addButton.classList.remove("on-press");
    app.onAdd();
  });

  app.render();
})();
