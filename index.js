$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

  
let travels = document.querySelectorAll("div .card") 

let numbersOfTravels = 0
for (let i = 0; i < travels.length; i++) {
    let element = i;
    numbersOfTravels += element
}
console.log(numbersOfTravels)