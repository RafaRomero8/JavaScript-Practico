const lista1 = [2,5,8,3,9,1,10,40,50,50,2,2];

const listaCount = {};//genera un objeto de cuantas veces hay un elemnto en la lista

lista1.map(elemento=>{
    if(listaCount[elemento]){//ver si el elemento que estamos recibiendo en cada
    // iteracion ya existe dentro del objeto(listaCount) contador ya existe
      listaCount[elemento] += 1; 
    }else{
        listaCount[elemento] = 1 ;//cantidad de veces que aparece
    }
    //cantidad de veces que aparece
})//metodo map es para recorrer el arreglo

const lista1Array = Object.entries(listaCount).sort(
    (elementoA,elementoB)=>{//funcio anonima
       return  elementoA[1] - elementoB[1]//cuando el elemntoA(10) sea mas grande que elementoB(-5) dara positivo el numero  
        //se remplaza por los condicionales de baao    
      //    elementoA(10) > elementoB(5)      
    //   elementoA(10)=elementoB(10)es igual 
    //  elementoA(5)<elementoB(10)
    }
)//Object.entries() lo convierte en un array

//Object.entries apartir de un objeto crearun array y tambien un array con arrays por dentro

const moda = lista1Array[lista1Array.length -1]//entramos a la ultima psicion, -1 para que empiece desde la poscion 0 



