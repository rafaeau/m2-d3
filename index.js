const travelsCount = function () {
  let travels = document.querySelectorAll("div .card")
  let count = document.querySelector("#travels-count")
  count.innerHTML = travels.length
}

const addBadge = function () {
  let summerCards = document.querySelectorAll("#summer .card-text")
  for (let i=0; i<summerCards.length; i++){
    summerCards[i].innerHTML += "<span class='badge badge-danger ml-4'>HOT</span>"
  }
  return summerCards
}

window.onload = function () {
  travelsCount();
  addBadge();
}