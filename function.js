function home() {

const btn = document.createElement("a");
btn.innerText = "volver";
btn.href = "index.html";
document.body.appendChild(btn);
    
}
/*Ejercicio 1
Cuantos años tengo hoy? 
Se desea un programa que calcule la edad de una persona que ingresa el año de nacimiento y el año actual por teclado. La edad debe ser mostrada por pantalla.
*/

function edad() {
    let birthYear;
    let actualYear;
    let age;

    birthYear = (prompt("Ingresa tu año de nacimiento:"));
    actualYear = (prompt("Ingresa el año actual:"));
    age = actualYear - birthYear;

    if (age < 0) {
        document.write("Verificar los datos ingresados.<br>");
       
    home();


     
        } else {
            if (age > 0) {
                document.write(age);
              
                home();
        }
    }   
}



/*Ejercicio 2

Se desea un programa que transforme una temperatura ingresada en grados Celsius a Fahrenheit.*/

function convert() {
    var celsius, Fahrenheit,
    
    celsius = parseInt(prompt("ingrese la temperatura en grados Celsius"));

    Fahrenheit = celsius * 1.8 + 32;
    
document.write("equivale a "+ Fahrenheit + "grados")
home();
};


/*Ejercicio 3

Dadas 3 variables con valores predefinidos, hacer los pasos necesarios para que quede en variable_1 el menor de los 3 valores, en variable_2 el siguiente y en variable_3 el mayor valor. Mostrar el resultado por pantalla.*/

function minToMax() {
    let a = 1, b = 2, c = 23;
    let min = 0;
    let med = 0;
    let max = 0;
    
    if ( a > b ) {
        if ( a > c){
           {
            if ( c > b){
                max = a;
                med = c;
                min = b;
                    } else {
                        max = a;
                        med = b;
                        min = c;
                }
        }
}
        else {
            max = c;
            med = a;
            min = b;
        }
               
} 
    else { // a < b
        if ( b > c){
            if ( a < c){
                max = b;
                min = c;
                med = a;
            } else {
                max = b;
                min = a;
                med = c;
        }
    }
        else {
            max = c;
            med = b;
            min = a;
        }

    }
    
    document.write("el menor es " + min );        
    document.write("el mayor es " + max );
    document.write("el medio es " + med );    
    home();
}

/*Ejercicio 4

Número anterior y posterior. Dado un número que el usuario ingresa por teclado, mostrar el número anterior y posterior al mismo.
*/


function prePost() {
    let number;
    let previus;
    let post;

    number = parseInt(prompt("Ingresa un numero entero"));

    previus = number - 1;
    post = number + 1;

document.write("tu numero es: " + number);
document.write("el anterior es: " + previus);   
document.write("el posterior es: " + post);    
home();
}

/*Ejercicio 5

Hacer un programa que calcule si un año que el usuario ingresa por teclado es bisiesto o no.*/

function bYear() {
    var year = parseInt(prompt("Ingrese el año:"));

    if (year%4 == 0){
        if (year%100 == 0){
            if (year%400 == 0){
                document.write("el año  es bisiesto" + "<br>")        
        }
            else {
        document.write("el año no es bisiesto" + "<br>")
            }
        }
        else {
            document.write("el año  es bisiesto" + "<br>")        
        }
    }
    else {
        document.write("el año no es bisiesto" + "<br>")
    }
    home();
}


/*Ejercicio 6

Hacer un programa que pida al Usuario que ingrese un número del 1 al 7 e indicarle a qué dia de la semana correspondería.*/

function week() {
    let weekNumber;
    let i;
    var days =["lunes" , "martes" , "miercoles" , "jueves" , "viernes" , "sabado" , "domingo"];

    weekNumber = parseInt(prompt("Ingrese un Numero 1-7"));

    if (weekNumber > 0 && weekNumber < 8){

        i = weekNumber - 1;
        document.write("su numero corresponde a " + days[i])
    }

    else {
    alert("El numero no aplica")
        //refresh
    }
    home();
}


/*Ejercicio 7

Hacer un programa que pida al usuario ingresar 10 números y luego diga cual es el mayor y cual es el menor.*/

function minMax() {
    let numbers = [];

    for (let i = 0; i < 10; i++) {
        numbers[i] = parseInt(prompt("ingrese su numero N°:" + i));
        console.log(numbers);
    }

    document.write("el maximo es: " + Math.max(...numbers)+ "<br>");
    document.write("el minimo es: " + Math.min(...numbers)+ "<br>");
    home();
}


/*Ejercicio 8

Hacer un programa donde el usuario ingresa 3 número y se le diga si la suma del primero y el segundo es igual al tercer número ingresado.*/

function suma() {
    
    let x, y, z;
    let suma;

    x = parseInt(prompt("ingrese el primer numero."))    
    y = parseInt(prompt("ingrese el segundo numero."))
    z = parseInt(prompt("ingrese el tercer numero."))

    suma = x + y;
    
    if (suma === z) {
        
        document.write("La suma de el 1ero y el segundo es igual al tercero.");
        home();
    } else {
        document.write("El tercero no es igual que el primero y el segundo juntos.");
        home();
    }

}

//Confeccionar un programa que muestre en que cuatrimestre del año nos encontramos. Para esto obtener el mes. 

function quater() {

    let date = new Date();
    let mes = date.getMonth()+1;
    console.log(mes);

    if (mes < 4){
        document.write("Estamos en el primer Trimestre. Mes N° " + mes + "<br>");
        home();

        } else {
            if (mes < 7){
                document.write("Estamos en el segundo Trimestre. Mes N° " + mes + "<br>");
            home();
    
             } else {
            
                if (mes < 10){
            document.write("Estamos en el tercer Trimestre. Mes N° " + mes + "<br>");
            home();
    
                 } else {
            document.write("Estamos en el cuarto Trimestre. Mes N° " + mes + "<br>");
            home();
    }
             }
            }
        }

//Ejercicio N°10
/*Desarrollar un programa que permita ingresar un vector de 8 elementos, e informe:
El valor acumulado de todos los elementos del vector.
El valor acumulado de los elementos del vector que sean mayores a 36.
Cantidad de valores mayores a 50.*/

function numbers() {
    

    //crear un vector elementos.

let elementos = [];
let sumaElementos = 0;
let suma36 = 0;
let cant50 = 0;

for (let i = 0; i < 8; i++) {
    let orden = i+1;
    //ingresar los valores a los elementos
    let dato = parseInt(prompt("Ingrese el número " + orden));
    elementos[i] = dato;
    sumaElementos += dato;
    if (dato > 36){
        suma36 += dato;
    }
    if (dato > 50){
        cant50 += 1;
    }

    
}
document.write("El total de elementos suma: " + sumaElementos + ".<br>");
document.write("Los numeros mayores a 36 suman: " + suma36 + ".<br>");
document.write("Hay " + cant50 + " numeros mayores a 50.<br>");
home();

}

//sumar los valores de todos los elementos.
//sumar valores +36
//cantida valores + 50