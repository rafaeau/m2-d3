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

const deleteAll = function () {
  let allCards = document.querySelectorAll("div .card")
  for (i=0; i<allCards.length; i++){
  allCards[i].remove()
  }
}

window.onload = function () {
  travelsCount();
  addBadge();
}