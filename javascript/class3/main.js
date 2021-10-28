/* var loQueSea = 30;

switch (loQueSea) {
    case 30:
        console.log('hee hee');
    break;
    case 40:
        console.log('40');
    break;
    default:
        console.log('default');
    break;
} */

//document.write('<h1>Perro</h1>');

/* var img = '<img src="img/evil_maeva2.jpg" alt="" width="100px"></img>'
for(let index = 0; index < 20; index++){
    document.write(img)
} */

/* var tabla = 5;
//imprimir la tabla de tabla
for(let index = 1; index < 11; index++){
    document.write('<h1>' + index + ' x ' + tabla + ' = ' + index*tabla + '</h1>');
} */


//imprimir una pirámide
var altura = prompt('Indique la altura:');
for(let index = 1; index <= altura; index++){
    for(let index2 = 1; index2 <= index; index2++){
        document.write('🐱');
    }
    document.write('<br>')
}