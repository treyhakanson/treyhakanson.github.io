(function () {
  let active = null;
  const root = document.getElementById("root");
  const workspace = document.getElementById("workspace");
  const clearButton = document.getElementById("clear");
  const recycleBin = document.getElementById("recycle");

  function getXAndY(e) {
    if (e.changedTouches) {
      const { pageX, pageY } = e.changedTouches[0];
      return { x: pageX, y: pageY };
    } else {
      return { y: e.pageY, x: e.pageX };
    }
  }

  function dragStart(e) {
    if (e.target.classList.contains("letter--template")) {
      e.preventDefault();
      e.stopPropagation();

      const { x, y } = getXAndY(e);

      active = document.createElement("div");
      active.classList.add("letter", "letter--placed");
      active.textContent = e.target.textContent;
      active.style.position = "absolute";
      active.style.left = x;
      active.style.top = y;

      workspace.appendChild(active);
    } else if (e.target.classList.contains("letter--placed")) {
      e.preventDefault();
      e.stopPropagation();

      active = e.target;
    }
  }

  function dragMove(e) {
    if (active === null) {
      return;
    }

    const { x, y } = getXAndY(e);
    active.style.left = x;
    active.style.top = y;
  }

  function dragEnd(e) {
    const { x: targetX, y: targetY } = getXAndY(e);
    const { x, y, width, height } = recycleBin.getBoundingClientRect();
    if (
      targetX > x &&
      targetX < x + width &&
      targetY > y &&
      targetY < y + height
    ) {
      active.remove();
    }
    active = null;
  }

  root.addEventListener("mousedown", dragStart, false);
  root.addEventListener("touchstart", dragStart, false);

  root.addEventListener("mousemove", dragMove, false);
  root.addEventListener("touchmove", dragMove, false);

  root.addEventListener("mouseup", dragEnd, false);
  root.addEventListener("touchend", dragEnd, false);

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
