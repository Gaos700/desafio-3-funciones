function pintar(evento, color = "yellow" ){
    evento.target.style.backgroundColor = color;
}
const ele = document.getElementById("elem1")

const ele2 = document.getElementById("elem2")
ele.addEventListener("click", function(event) {
    pintar(event, 'yellow');
});
ele2.addEventListener("click", function(event) {
    pintar(event, 'green'); 
});