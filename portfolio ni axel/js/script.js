const sideBar = document.getElementById("sidebar");
const closeOverlay = document.getElementById("close-overlay");
sideBar.style.display = "non";
closeOverlay.style.display = "none";

function openSide() {
  if (
    sideBar.classList.contains("show") &&
    closeOverlay.classList.contains("show")
  ) {
    sideBar.classList.remove("show");
    closeOverlay.classList.remove("show");
    sideBar.style.display = "non";
    closeOverlay.style.display = "none";
  } else {
    sideBar.classList.add("show");
    closeOverlay.classList.add("show");
    sideBar.style.display = "flex";
    closeOverlay.style.display = "flex";
  }
}

function downloadCV() {
  location.assign(
    "https://drive.google.com/file/d/1fAZsfAnQuSAdcIT_scvfDypFcSOhmprS/view?usp=drive_link"
  );
}

function myWorks() {
  location.assign("#myWorks");
}

function furni() {
  location.assign("https://axelllllllllllllllllllll.github.io/furni./");
}

function archi() {
  location.assign(
    "https://axelllllllllllllllllllll.github.io/bs-architect/index.html"
  );
}

function finance() {
  location.assign("https://axelllllllllllllllllllll.github.io/flowfinance/");
}
