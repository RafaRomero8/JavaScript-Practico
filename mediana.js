
//MEDIANA
let MediaAritmetica = Listas => {
  //reduce() permite ir sumando cada uno de los elementos de una lista o array
const sumaLista = Listas.reduce((valorAcumulado=0,nuevoElemento) => valorAcumulado + nuevoElemento)
//SUMANDO LAS ITERACIONES,SUMA 0 co el primer elemento
return sumaLista / Listas.length
}

const lista2 =[100,200,300,400,800,400,100,700]
                    //cantidad de lementos y lo dividimos entre dos para encontar la mitad
 
 
  let ordenarLista = lista2 =>  lista2.sort()
  console.log(ordenarLista)
  

let media = listamedia =>{

  let mitadLista =  parseInt(listamedia.length/2)//convierte un decimal en un entero

let esPar = numero =>{
  if (numero % 2 === 0) return true //sacar el modulo(si no nos da residuo(0) es par)
  else return false
}
  let mediana;

if(esPar(listamedia.length)){
 const elemento1 = listamedia[mitadLista - 1]
 const elemento2 =  listamedia[mitadLista]

 const promedioElemento1y2 = MediaAritmetica([elemento1,elemento2])
 mediana = promedioElemento1y2

}
else{
  mediana= listamedia[mitadLista]//posicion mitad de la lista2 dentro mitadLista
}
return mediana

}

//console.log(media([]))