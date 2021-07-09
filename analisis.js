const salariosMex = Mexico.map(persona=> persona.salary) //funcion que ermite iterar por cada uno del array de Mexico

const salariosMexSorted = salariosMex.sort((salaryA,salaryB) => salaryA - salaryB) //para ordenarlo de mayor a menor  

let esPar = numero => (numero % 2 === 0)//si es par o inpar



  function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }
  

let medianaSalario = lista =>{ //calcular la mediana de salarios para cualquier pais
    const mitad = parseInt(lista.lenght / 2)//parseInt para quitar los decimales 
    if(esPar(lista.lenght)){//se le pasa la lista(cntidad de leemntos que hay en nuestra lista)
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad]
        const mediana =  calcularMediaAritmetica([personaMitad1,personaMitad2])
        return mediana

    }else{
        const personaMitad = lista[mitad]//entrar a la poscion mitad
        return personaMitad //la posicion mitad de la lista si es impar
    }
}

console.log(medianaSalario(salariosMexSorted))    
