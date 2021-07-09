const numeros =[10,20,30]


for (let i = 0;i < numeros.length; i++){

    numeros[i]= numeros[i] * 2
    console.log(numeros[i])
}
//las tres reciben una funcion y sirven para arrays

//MAP(cuando tenemos un array y queremos obtener un nuevo array de otra cosa)
const numeross =[10,20,30]
const dobles = numeross.map(numero => numero * 2 )
console.log(dobles)

  //.map( function(numero,posicion){como primer parametro recibe el elemnto del array  que va a transfromar y como segundo la posicion del elemnto dentro del array
           //si queremos podemos pasarle un tercer parametro que es el array original(numeros)
    //       numero => numero * 2              
    //})


const productos =[
    {id:'trtecerewngfnghah',nombre:'Camiseta',precio:500},
    {id:'tluiluingfnghah',nombre:'Pantalon',precio:3670},
    {id:'zxczvweghdfghah',nombre:'Zapatillas',precio:2400},
]

const productosConDescuento = productos.map(producto =>{
    if (producto.precio < 1000) return producto;//aplicar descuento a los que tenga mas de $1000
//debemos de retornar un nuevo objeto
    return{
        ...producto,//nuevo objeto
        precio: producto.precio * 0.9
    };
});

console.log(productos)
console.log(productosConDescuento)

//podemos traer los id de los prouctos con map

const idProductos = productos.map(({ id })=> id)
                                //(producto => producto.id)
console.log(idProductos)

//------------------------------------------------------------------
//filter(es un nuevo array que contiene solo los elemntos originales del array que cumplan cierta codicion)
//retorna true o false

const productos2 =[
    {id:'trtecerewngfnghah',nombre:'Camiseta',precio:500},
    {id:'tluiluingfnghah',nombre:'Pantalon',precio:3670},
    {id:'tluiluingfnghah',nombre:'Lentes',precio:252},
    {id:'zxczvweghdfghah',nombre:'Zapatillas',precio:2400},
]

const esBarato= producto2 =>producto2.precio < 1000//si el producto es menor que mil es barato
const esCaro = producto => !esBarato(producto)
const productosBaratos = productos2.filter(esBarato)
const productosCaros = productos2.filter(esCaro)


console.log(productosBaratos)
console.log(productosCaros)

const numeros2 = [1,2,3,4,3,1]
//pra sacr numeros repetidos
const numerosUnicos = numeros2.filter((numero,posicion,numeros2) => {
    return posicion === numeros2.indexOf(numero)//indexOf retorna la primera posicion
                                //para er si aparecen por primera ves y pasaran alnuevo array
}) 

console.log(numerosUnicos)

//reduce(necesita un array y un valor que le debemos indicar nostros, la suma de los array reduciendo el array original a un unico valor)
const numeros4 = [3,10,40,25]
let acumular =(acumulador,numero)=> acumulador +numero//retornamos el valor del acumulador actualizado(nuevo valor)
let total = numeros4.reduce(acumular,0)
  
console.log(total)
  
//el primer parametro de reduce es la funcion reductora la que va a ir actulizando el acumulador
//y es segundo parametro es el valor inicial del acumulador que sera 0

const numero5 = [71,41,23,67,3,12]

const acumuladorDoble=(acumulador,numero)=>[...acumulador,numero *2]//le llega un array retorn un nuev valor
const dobles = numero5.reduce(acumuladorDoble,[])
console.log(dobles)



const Producto =[
    {id:'trtecerewngfnghah',nombre:'Camiseta',precio:500},
    {id:'tluiluingfnghah',nombre:'Pantalon',precio:3670},
    {id:'tluiluingfnghah',nombre:'Lentes',precio:252},
    {id:'zxczvweghdfghah',nombre:'Zapatillas',precio:2400}
]

const precioTotalProductoBarato = productos.filter(esBarato).map(obtenerPrecio).reduce(acumular)



