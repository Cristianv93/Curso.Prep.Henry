// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  
  return (array[0]);

}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var long = array.length;
  return (array[long-1]);
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  var long = array.length;
  return (long);
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (var i=0; i<array.length;i++){

    aux = array[i];
    aux++;
    array[i]=aux;
  }
  return (array);
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return(array);
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return (array);
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
str = palabras.join(' ');
return (str);

}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var aux;

  for(var i=0; i<array.length ; i++)
  {

    if (array[i] === elemento)
    {
      return (true);
    }
  } 
return (false);

}

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var aux1=0 , aux2=0;

  for (var i=0 ; i<numeros.length; i++){
    aux1= numeros [i];
    aux2=aux1+aux2

  }
  return (aux2);
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
var aux1=0 , aux2=0;

for (var i=0 ; i<resultadosTest.length ; i++){

  aux1= resultadosTest[i];
  aux2=aux1+aux2;

}

return (aux2/resultadosTest.length)

}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var aux1=0;

  for (var i=0; i<numeros.length ; i++){

    if (numeros[i]>aux1){
      aux1=numeros[i];
    }
  }
return (aux1);

}

function multiplicarArgumentos() 
{
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:

  if (arguments[0] == undefined || arguments[0] === 0)
  {
    return 0;
  } 
  else 
  {
    if (arguments.length == 1)
    {
      return arguments[0];
    } 
    else 
    {
      var prod = arguments[0];
      for (i = 1; i < arguments.length; i++)
       {
      prod = prod * arguments[i];
       }
     }
    }
  return prod;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};
