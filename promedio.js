
let MediaAritmetica = lista => {
    let sumaLista = 0
                        //lenght
for(let i = 0;i < lista.length; i++){
      sumaLista = sumaLista + lista[i]//suma los elementos
}
//const promedioLista = sumaLista / lista.length
return sumaLista / lista.length

}

console.log(MediaAritmetica([20,20,20,20,20]))

//otra forma de calcular 

let Mediaaritmetica = Listas => {
                          //reduce() permite ir sumando cada uno de los elementos de una lista o array
    const sumaLista = Listas.reduce((valorAcumulado=0,nuevoElemento)=> valorAcumulado + nuevoElemento)
                        //SUMANDO LAS ITERACIONES,SUMA 0 co el primer elemento
    return sumaLista / Listas.length
}

console.log(Mediaaritmetica([10,10,30]))

//MEDIANA

const lista2 =[100,200,300,400,80000]
                    //cantidad de lementos y lo dividimos entre dos para encontar la mitad
const mitadLista = lista2.length/2

let esPar = numero =>{
  if (numero % 2 === 0) return true //sacar el modulo(si no nos da residuo(0) es par)
  else return false
}
let mediana;

if(esPar(lista2.length)){

}
else{
  mediana= lista2[mitadLista]//posicion mitad de la lista2 dentro mitadLista
}

