(function (window, document) {
  // Handle keypresses
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "ArrowDown" &&
      window.pageYOffset !==
        document.body.getBoundingClientRect().height - window.innerHeight
    ) {
      window.scrollTo({
        top: window.pageYOffset + window.innerHeight,
        behavior: "smooth",
      });
    } else if (event.key === "ArrowUp" && window.pageYOffset !== 0) {
      window.scrollTo({
        top: window.pageYOffset - window.innerHeight,
        behavior: "smooth",
      });
    }
  });
})(window, document);
