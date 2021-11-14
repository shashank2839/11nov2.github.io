var greet = document.getElementById('input');
function fm() {
    greet.innerText = "Good Morning Shashank"
    greet.style.color = 'red'
    var box = document.querySelector('div')
    box.style.background = "yellow"
}
function fa() {
    greet.innerText = "Good Afternoon Shashank"
    greet.style.color = 'black'
    var box = document.querySelector('div')
    box.style.background = "orange"
}
function fe() {
    greet.innerText = "Good Evening Shashank"
    greet.style.color = 'violet'
    var box = document.querySelector('div')
    box.style.background = "black"
}