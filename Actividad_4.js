/* A.   Realice una conversión de grados centígrados a grados 
            farenheit, y de grados farenheit a grados centígrados 
            de una variable de tipo numérica. Utilice esta fórmula: 

            let celsiusA = 43
            let fahrenheitA = 64

            function celsius(fahrenheit) {
                celsius = (fahrenheitA - 32) * 5 / 9;
                return celsius;
            }

            function fahrenheit(celsius) {
                fahrenheit = (celsiusA * 9 / 5) + 32;
                return fahrenheit;
            }

            document.write(celsius(fahrenheitA));
            document.write(fahrenheit(celsiusA));*/


/* B.   Realice un conversor de Euros a dólares,
Utilice el factor de conversión: 1 Euro  = 1.09 Dolares. 
 
 let eurosA = 10;

   function eurosDolares(euros) {
       eurosDolares = (eurosA * 1.9);
       return eurosDolares;
   }

   document.write(eurosDolares(eurosA));*/


/* C.   Calcule el ITBMS de un producto, Utilice una variable para guardar
el valor del precio del producto, y una constante para que guarde el 
porcentaje a calcular, guardar el resultado en una variable y muéstrela.  

let precioProducto = 10.50;
    const ITBMS = 0.07

    let total = (precioProducto * ITBMS) + precioProducto;

    document.write(total); */


/* D.	Realice un ejercicio que, dado un valor en una variable numérica,
se realice una operación que nos indique si esta variable es numero 
par o numero impar. 

let numero_A_Dividir = 3;
let numero_Divisor = 2;
let pregunta = ('El numero es par?')

let resultado = numero_A_Dividir % numero_Divisor;
let respuesta = resultado === 0;

document.write(pregunta + ' ' + respuesta);*/


/* E.	Calcule el promedio de tres variables.

let nota_1 = 4;
let nota_2 = 12;
let nota_3 = 8;
let respuesta = ('El promedio seria:')

let promedio = (nota_1 + nota_2 + nota_3) / 3;

document.write(respuesta + ' ' + promedio);*/


/* F.	Calcula el salario de un trabajador, dada las horas semanales, y el
 costo de la hora en una constante, y los descuentos por ley
 (Seguro Social 9.75%, Impuesto educativo 1.25%), 
 calcula el salario mensual y el salario quincenal. 

 let horas = 180;
 let costo_Por_Hora = 2.37;
 let seguroSocial = horas * costo_Por_Hora / 10.25641025641;
 let impuestoEducativo = horas * costo_Por_Hora / 80;
     let pagoMensual = horas * costo_Por_Hora - seguroSocial - impuestoEducativo;
     let pagoQuincenal = pagoMensual / 2;

     document.write('<h2>Pago mensual' + ' ' + pagoMensual +  '<br/>'  +  'Pago quincenal' +  ' ' + pagoQuincenal + '</h2>');*/




/* G.	Calcula el salario de un trabajador, dada las horas semanales, y
el costo de la hora en una constante, y los descuentos por ley 
(Seguro Social 9.75%, Impuesto educativo 1.25%), 
calcula el salario mensual y el salario quincenal. 

let edad = 20;
    let pregunta = ('Es mayor de edad la persona?');
    let respuesta = edad >= 18;

    document.write(pregunta + ' ' + respuesta);*/



/* H.	Comprobar si un número es positivo (mayor que cero).

let numero_Pobar = -4;
let positivo_O_Negativo = numero_Pobar >= 0;
let pregunta = ('El numero es positivo?');

document.write(pregunta + ' ' + positivo_O_Negativo);*/


/* I.	Declare dos variables, una con el valor ‘5’, otra con el valor 5.
Imprima el resultado comparando si son iguales, utilizando el operador 
correcto para comparar el valor y tipo de estas variables. 

let valor_1 = 5;
let valor_2 = 5;
let pregunta = ('Los valores son iguales?');
    let resultado = valor_1 == valor_2;
document.write(pregunta + ' ' + resultado);*/


/* J.	Dada dos variables de tipo texto, imprima un valor en el HTML,
solamente si ambas variables tienen el mismo texto escrito.  

let pais = ('panama');
let ciudad = ('panama');

let resultado = ('panama' === pais) && ('panama' === 'panama');

document.write(resultado);*/


/* K.	Dada dos variables de tipo texto, imprima un valor en el
HTML, solamente si ambas variables tienen el mismo texto escrito.

let pais = ('panama');
let ciudad = ('panama');

let resultado = ('colon' === pais) || ('panama' === 'panama');

document.write(resultado);*/