let cell = document.querySelectorAll("span:first-of-type")
let date = document.getElementById("date")

function setClock(){
     let now = new Date()
    let hours = new Date().getHours()
hours = hours % 12 || 12

cell[0].textContent =
hours <= 9 ? "0" + hours : hours
    cell[1].textContent = new Date().getMinutes()
    cell[2].textContent = new Date().getSeconds()


 date.textContent = now.toDateString()
    setTimeout(setClock, 1000)
}

setClock()