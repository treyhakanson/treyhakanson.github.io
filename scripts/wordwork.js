(function () {
  let active = null;
  const root = document.getElementById("root");
  const workspace = document.getElementById("workspace");
  const clearButton = document.getElementById("clear");

  root.addEventListener(
    "touchstart",
    function (e) {
      if (e.target.classList.contains("letter--template")) {
        e.preventDefault();
        e.stopPropagation();
        const { pageX, pageY } = e.changedTouches[0];
        active = document.createElement("div");
        active.classList.add("letter", "letter--placed");
        active.textContent = e.target.textContent;
        active.style.position = "absolute";
        active.style.top = pageY;
        active.style.left = pageX;
        workspace.appendChild(active);
      } else if (e.target.classList.contains("letter--placed")) {
        e.preventDefault();
        e.stopPropagation();
        active = e.target;
      }
    },
    false
  );

  root.addEventListener(
    "touchmove",
    function (e) {
      if (active === null) {
        return;
      }

      const { pageX, pageY } = e.changedTouches[0];
      active.style.top = pageY;
      active.style.left = pageX;
    },
    false
  );

  root.addEventListener(
    "touchend",
    function (e) {
      active = null;
    },
    false
  );

  root.addEventListener("dblclick", function (e) {
    if (e.target.classList.contains("letter--placed")) {
      e.target.remove();
    }
  });

  clearButton.addEventListener(
    "click",
    function (e) {
      document
        .querySelectorAll(".letter--placed")
        .forEach((element) => element.remove());
    },
    false
  );
})();
