// Helpers
let esPar= numerito => (numerito % 2 === 0)
  
  let MediaAritmetica = Listas => {
    //reduce() permite ir sumando cada uno de los elementos de una lista o array
  const sumaLista = Listas.reduce((valorAcumulado=0,nuevoElemento) => valorAcumulado + nuevoElemento)
  //SUMANDO LAS ITERACIONES,SUMA 0 co el primer elemento
  return sumaLista / Listas.length
  }
  
  // Calculadora de mediana
let  medianaSalarios= lista => {
    const mitad = parseInt(lista.length / 2);
  
    if (esPar(lista.length)) {
      const personitaMitad1 = lista[mitad - 1];
      const personitaMitad2 = lista[mitad];
  
      const mediana = MediaAritmetica([personitaMitad1, personitaMitad2]);
      return mediana;
    } else {
      const personitaMitad = lista[mitad];
      return personitaMitad;
    }
  }
  
  // Mediana General
  const salariosCol = Mexico.map(personita => personita.salary)
  
  const salariosColSorted = salariosCol.sort((salaryA, salaryB) => salaryA - salaryB)

  const medianaGeneralCol = medianaSalarios(salariosColSorted);
  
  // Mediana del top 10%
  //const arrayEjemplo = [0,1,2,3,4,5,6,7,8,9,10]
  //const ejemplo = arrayEjemplo.splice(5,2)
  //console.log(ejemplo)
  //[5,6]
  const spliceStart = (salariosColSorted.length * 90) / 100;//sacar el 10%
  const spliceCount = salariosColSorted.length - spliceStart;//
  
  const salariosColTop10 = salariosColSorted.splice( spliceStart,spliceCount)
//metodo splice recibe dos argumentos,lo que hace es hacer un corte del array 
//en la posicion que elijamos como primer parametro                                                  //en elegundo argumento es decirle en cuantas partes dividirlo                
   
const medianaTop10Col = medianaSalarios(salariosColTop10);
  
console.log({medianaGeneralCol, medianaTop10Col})
  