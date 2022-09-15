const time = new Date().getHours();
let greeting;
if (time < 10) {
    greeting = "Good morning";
} else if (time < 20) {
    greeting = "Good day";
} else{
    greeting = "Good evening";
}
document.getElementById("greeting").innerHTML = greeting;

const date = new Date();
document.getElementById("date").innerHTML = date;







/*const list = document.querySelectorAll('.list');
function activelink(){
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
item.addEventListener('click',activelink));


//this is for board switch//
document.getElementById("row1").style.display = "none";
document.getElementById("row3").style.display = "none";

const active = document.querySelectorAll('.active');
if ()

*/

