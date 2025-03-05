function openPopup() {
  document.getElementById("popup").classList.add("active");
  document.getElementById("overlay").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").classList.remove("active");
  document.getElementById("overlay").style.display = "none";
}
