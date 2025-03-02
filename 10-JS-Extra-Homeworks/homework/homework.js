// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/

  //Escribe tu código aquí
  var auxMatrix=[];
  let i=0;
  for (var clave in objeto) {
    auxMatrix[i]=[clave, objeto[clave]];
    i++;

  } 
  return auxMatrix
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var matriz={};
  for (let i=0;i<string.length;i++){
    if (string.charAt(i) in matriz){continue;}
    else{
    matriz[string.charAt(i)]=1;
    for (let j=(i+1);j<string.length;j++){
      if (string.charAt(i)===string.charAt(j)){
        
        matriz[string.charAt(i)]++
        
      }
    }
    }
  }
  
  return matriz
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var auxArray=s.split("");
  var mayus="";
  var minus="";
 for (i=0;i<s.length;i++){
    if (auxArray[i].toUpperCase()===auxArray[i]) {
      mayus=mayus+auxArray[i].toString();}
      else
      minus=minus+auxArray[i].toString();

 }
return mayus+minus
}

function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var strVector=str.split(" ");
  var strAux="";
  for (var i=0;i<strVector.length;i++){
    let strAuxAux=strVector[i].toString();
    
    for (var j=strAuxAux.length-1;j>-1;j--){
      strAux=strAux+strAuxAux.charAt(j);
    } 
    while (i<strVector.length-1){
      strAux=strAux+" ";
      break
    }
  }
  return strAux
} 

function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var aux=numero.toString();
  var numCap="";
  for (let i=aux.length-1;i>-1;i--){
    numCap=numCap+aux.charAt(i);
  }
  if (numCap===aux){
    return "Es capicua"
  }
  else {
    return "No es capicua"
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var arrAux=cadena.split("");

  var strAux="";
  for (let i=0;i<arrAux.length;i++){
    if (arrAux[i]==="a"||arrAux[i]==="b"||arrAux[i]==="c"){
      continue;
    }
    strAux=strAux+arrAux[i];
  }
  return strAux
}

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var strAux1="";
  var strAux2="";
  for (let j=0;j<arr.length;j++){
    for (let i=1;i<arr.length;i++){
      if (arr[i-1].length>arr[i].length){
        strAux1=arr[i-1];
        strAux2=arr[i];
        arr[i-1]=strAux2;
        arr[i]=strAux1;
        
      }
    }
  }
  return arr
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var arrUnion=[];
  for (let i=0;i<arreglo1.length;i++){
    for (let j=0;j<arreglo2.length;j++){
      if (arreglo2[j]===arreglo1[i]) {
        arrUnion.push(arreglo2[j]);
      }
    }
  }
 
  return arrUnion
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

