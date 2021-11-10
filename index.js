const travelsCount = function () {
  let travels = document.querySelectorAll("div .card")
  let count = document.querySelector("#travels-count")
  count.innerHTML = travels.length
}

window.onload = function () {
  travelsCount();
}