let bootstrap5GridOverlay = document.createElement("div");
let checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.id = "bootstrapGridToggler";
checkbox.classList.add("bootstrapGridToggle");
bootstrap5GridOverlay.classList.add("enable-grid");
document.body.appendChild(checkbox);
document.body.appendChild(bootstrap5GridOverlay);
