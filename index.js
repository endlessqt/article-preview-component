const buttonShare = document.querySelector(".share");
const popupDesktop = document.querySelector(".popup-desktop");
const socialButtons = document.querySelectorAll(".popup-desktop button");
const bottomSect = document.querySelector(".bottom-sect");

buttonShare.addEventListener("click", () => {
  popupDesktop.classList.toggle("show");
  if (window.matchMedia("(max-width: 640px)").matches) {
    popupDesktop.classList.add("no-after");
  } else {
    popupDesktop.classList.remove("no-after");
  }
  if (window.matchMedia("(max-width: 640px)").matches) {
    bottomSect.classList.add("no-padding");
  } else {
    bottomSect.classList.remove("no-padding");
  }
});
socialButtons.forEach((button) => {
  button.addEventListener("click", () => {
    popupDesktop.classList.toggle("show");
    if (!popupDesktop.classList.contains("show")) {
      bottomSect.classList.remove("no-padding");
    }
  });
});
//remove popup on click non on popup\button\share-button
document.addEventListener("click", (e) => {
  if (
    !(
      e.target.closest("button") === buttonShare ||
      e.target.closest(".popup-desktop") ||
      e.target.closest(".popup-desktop button")
    )
  ) {
    popupDesktop.classList.remove("show");
    if (!popupDesktop.classList.contains("show")) {
      bottomSect.classList.remove("no-padding");
    }
  }
});

window.addEventListener("resize", () => {
  if (
    popupDesktop.classList.contains("show") &&
    window.matchMedia("(min-width: 640px)").matches
  ) {
    bottomSect.classList.remove("no-padding");
    popupDesktop.classList.remove("no-after");
  }
});
