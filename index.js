const buttonShare = document.querySelector(".share");
const popupDesktop = document.querySelector(".popup-desktop");
const socialButtons = document.querySelectorAll(".popup-desktop button");

buttonShare.addEventListener("click", () => {
  popupDesktop.classList.toggle("show");
});
socialButtons.forEach((button) => {
  button.addEventListener("click", () => {
    popupDesktop.classList.toggle("show");
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
  }
});
