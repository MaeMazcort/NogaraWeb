/* var element = document.getElementsByTagName('p')[1]; */
/* var element = document.getElementsByClassName('animals'); */

/* console.log(element); */

//Inyectamos las etiquetas, dentro de las etiquetas body
document.getElementsByTagName('body')[0].innerHTML = '<main> </main> <footer></footer>'

var element1 = '<p class="animals"> Gato </p>';
var element2 = '<p class="animals" id="Perro"> Perro </p>';
var element3 = '<a class="animals" href="#" onclick="cambiarTexto()"> Click </a>';

document.getElementsByTagName('main')[0].innerHTML = element1 + element2 + element3

function cambiarTexto(){
    document.getElementsByTagName('p')[0].innerHTML = '<h2>Perro</h2>'
}