const languageSelector = document.querySelector("#change_language");

languageSelector.addEventListener("change", onChange);

function onChange() {
  var all_english = document.querySelectorAll(".english");
  var all_polish = document.querySelectorAll(".polish");
  var all_nv = document.querySelectorAll(".newversion");
  var all_nv1 = document.querySelectorAll(".nowawersja");
  if (languageSelector.value == "en") {
    all_english.forEach(function (elem) {
      elem.style.display = "block";
    });
    all_polish.forEach(function (elem) {
      elem.style.display = "none";
    });
    all_nv.forEach(function (elem) {
      elem.style.display = "block";
    });
    all_nv1.forEach(function (elem) {
      elem.style.display = "none";
    });
  } else {
    all_english.forEach(function (elem) {
      elem.style.display = "none";
    });
    all_polish.forEach(function (elem) {
      elem.style.display = "block";
    });
    all_nv.forEach(function (elem) {
      elem.style.display = "none";
    });
    all_nv1.forEach(function (elem) {
      elem.style.display = "block";
    });
  }
}
function changeMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");

  const isDarkMode = body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
}

window.onload = function () {
  const body = document.body;
  const darkMode = localStorage.getItem("darkMode");

  if (darkMode === "enabled") {
    body.classList.add("dark-mode");
    document.querySelector(".switch input").checked = true;
  } else {
    body.classList.remove("dark-mode");
    document.querySelector(".switch input").checked = false;
  }
};
//zmienianie się listy na języki też czyli jak będzie polish kliknietę to będzie Polski itd.
