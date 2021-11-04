/* var num = 0;

while(num < 11){
    document.write('Hola');
    num++;
} */

/* var num2 = 0;
do{
    document.write(num2);
    num2++;
}while(num2 < 10); */

/* //Arrays
var animales = ['Perro', 'Gato', 'Caballo', 'Cabra', 'Cerdo'];

//document.write(animales);
//console.log(animales);
for(let index = 0; index < animales.length; index++){
    document.write(animales[index] + '<br>');
}  */

/* var numeros = [
    1,
    2,
    3,
    [
        4, 5, 6, [7, 8, 9]
    ]
]
//numeros[3][0] sale 4 */

//Meter imagenes en un array
var imagenes = [
    ['evil_maeva2', 'aaa'],
    ['IMG_2897','xd'],
    ['IMG_2906','what'],
    ['IMG_2915','time'],
    ['IMG_3020','phone'],
]

for(let index = 0; index < imagenes.length; index++){
    document.write('<img src="img/' + imagenes[index][0] + '.jpg" alt="">');
    document.write('<p>' + imagenes[index][1] + '</p>');
}