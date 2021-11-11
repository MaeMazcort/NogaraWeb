/* var element = '<div>Algo de texto</div>'

document.getElementsByTagName('body')[0].innerHTML = element */

//var element = '<p>Gato</p>';
var container = document.getElementsByTagName('main')[0];

//container.innerHTML = element;

/* //Creamos un elemento desde 0, puedo crear cualquier etiqueta
var element = document.createElement('div');

//Agregar un hijo
container.appendChild(element); */

/* var animals = [
    'Perro',
    'Gato',
    'Pez',
    'Perico',
    'Delfin',
    'Elefante',
    'Jirafa',
    'Dinosaurio',
    'Panda',
    'a',
];

for(let index = 0; index < animals.length; index++){
    //Creamos un div y lo guardamos en element
    var element = document.createElement('div');
    //Metemos un párrafo que diga perro
    element.innerHTML = `
    <div>
        <p> ${animals[index]} </p>
    </div>
    `;
    //Metemos el hijo (element) al container
    container.appendChild(element);
} */

/* for(let index = 0; index < 10; index++){
    //Creamos un div y lo guardamos en element
    var element = document.createElement('div');
    //Metemos un párrafo que diga perro
    element.innerHTML = '<p>Perro</p>';
    //Metemos el hijo (element) al container
    container.appendChild(element);
} */

var tiktoker = {
    name: 'luis angel',
    stars: 10,
    type: 'Frio/ADA',
    info: 'Este mosntruo de angular, se alimenta de JavaScript, su debilidad son los corridos tumbados',
    atk: 1200,
    def: 900,
    img: 'IMG-20211005-WA0001.jpg',
};

var element = document.createElement('div');
var container = document.getElementsByTagName('main')[0];

//Acceder a todas las clases que hay dentro de ese elemento
element.classList.add('card');
element.innerHTML = `
<div class="yellow">
    <div class="title">
        <div>${tiktoker.name}</div>
        <div>Logo</div>
    </div>
    <div class="stars"> 
        <img src="img/star.png" alt="">
        <img src="img/star.png" alt="">
        <img src="img/star.png" alt="">
        <img src="img/star.png" alt="">
        <img src="img/star.png" alt="">
        <img src="img/star.png" alt="">
        <img src="img/star.png" alt="">
        <img src="img/star.png" alt="">
        <img src="img/star.png" alt="">
        <img src="img/star.png" alt="">
    </div>
    <div class="img"></div>
    <div class="info">
        <p class="tipo">${tiktoker.type}</p>
        <p class="descp">${tiktoker.info}</p>
        <p class="specs">ATK/${tiktoker.atk} DEF/${tiktoker.def}</p>
    </div>
</div>
`

container.appendChild(element);
