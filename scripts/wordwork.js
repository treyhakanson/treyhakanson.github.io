(function () {
  let active = null;
  const root = document.getElementById("root");
  const workspace = document.getElementById("workspace");
  const clearButton = document.getElementById("clear");

  root.addEventListener("mousedown", function (e) {
    if (e.target.classList.contains("letter--template")) {
      active = document.createElement("div");
      active.classList.add("letter", "letter--placed");
      active.textContent = e.target.textContent;
      active.style.position = "absolute";
      const { x, y, width, height } = e.target.getBoundingClientRect();
      active.style.top = (height - y) / 2;
      active.style.left = (width - x) / 2;
      workspace.appendChild(active);
    } else if (e.target.classList.contains("letter--placed")) {
      active = e.target;
    }
  });

  root.addEventListener("mousemove", function (e) {
    if (active === null) {
      return;
    }

    active.style.top = e.clientY;
    active.style.left = e.clientX;
  });

  root.addEventListener("mouseup", function (e) {
    active = null;
  });

  root.addEventListener("dblclick", function (e) {
    if (e.target.classList.contains("letter--placed")) {
      e.target.remove();
    }
  });

  clearButton.addEventListener("click", function (e) {
    document
      .querySelectorAll(".letter--placed")
      .forEach((element) => element.remove());
  });
})();
