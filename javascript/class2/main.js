/* var gato = true;
var pajaro = false;

if(pajaro){
    console.log('Tiene 4 patas');
}
else{
    console.log('No tiene 4 patas');
}

var dinero = prompt('¿Cuanto dinero traes?');

if(dinero >= 100){
    console.log('Te alcanza para 10 panes de morido')
}
else if(dinero >= 90){
    console.log('Te alcanza para 9 panes de morido')
}
else{
    console.log('No moleste');
}

//

var perro = prompt('¿Cuanto dinero tienes?');

if(perro){
    console.log('Tienes dinero');
} */

//Operadores lógicos
/* var estudiante = 'Sebas';
var titulo = true;
var experiencia = false;
var edad = 23;

if((titulo || experiencia) && edad >= 18){
    console.log('Puede conseguir trabajo');
}else{
    console.log('No puede conseguir trabajo');
} */

/*
cuantos helados quieres???

Si el usuario tiene cupon se le descuenta -1$

El helado sin topping cuesta 1.90$.
El topping de oreo cuesta 1$.
El topping de KitKat cuesta 1.50$.
El topping de brownie cuesta 0.75$.
El topping de lacasitos cuesta 0.95$. 

No puedes tener var vacias
*/
var helados = 0;
var precioTopping = 0.0;
var topping = '';
var total = 0.0;
var cupon = '';

helados = prompt('¿Cuántos helados quieres?');
if(helados > 0){ //Falta revisar si es numérico o no
    topping = prompt('¿Qué topping quiere?');
    switch(topping){
        case 'Ninguno':
            precioTopping = 0.0;
        break;
        case 'Oreo':
            precioTopping = 1.0;
        break;
        case 'Kitkat':
            precioTopping = 1.5;
        break;
        case 'Brownie':
            precioTopping = 0.75;
        break;
        case 'Lacasitos':
            precioTopping = 0.95;
        break;
        default:
            console.log('No es un topping válido');
            //Volver a preguntar (?
    }
    total = (1.9 + precioTopping) * helados;
    if(prompt('¿Tiene cupón? (Si/No)') == 'Si'){
        cupon = prompt('Inserte el cupon:');
        if(cupon == 'Perro'){
            total = total - 1;
        }else{
            console.log('Cupón no válido');
        }
    }

    console.log('El total es ' + total);
}else{
    console.log('Vuelva pronto')
}