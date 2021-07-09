//Codigo cuadrado
console.group("Cuadrado")

const ladoCuadrado = 5
console.log(`los lados del cuadrado son: ${ladoCuadrado}`)

const perimetroCuadrado = ladoCuadrado * 4
console.log(`El perimetro es: ${perimetroCuadrado} cm`)

const areaCuadrado = ladoCuadrado * ladoCuadrado
console.log(`El area del cuadrado es: ${areaCuadrado} cm cuadrados`)
console.groupEnd()

//codigo triangulo
console.group("Triangulos")
const ladoTriangulo1 = 6
const ladoTriangulo2 = 6
const baseTriangulo = 4 
console.log(`Los lados del triangulo miden: ${ladoTriangulo1}cm ${ladoTriangulo2}cm ${baseTriangulo}cm`)

const alturaTriangulo = 4.5
console.log(`La altura del triangulo miden: ${alturaTriangulo}cm`)

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
console.log(`El perimetro es: ${perimetroTriangulo} cm`)

const areaTriangulo = (baseTriangulo*alturaTriangulo)/2
console.log(`El area es: ${areaTriangulo} cm`)


console.groupEnd()
console.group("circulos")

const radioCirculo = 4
const diametroCirculo = radioCirculo * 2
const PI = Math.PI
const perimetroCirculo = diametroCirculo * PI
const araeCirculo = (radioCirculo * radioCirculo) * PI
console.log(`El radio es: ${radioCirculo} cm`)
console.log(`El diametro es: ${diametroCirculo} cm`)
console.log(`El perimetro es: ${perimetroCirculo} cm`)
console.log(`El area es: ${araeCirculo}} cm`)


console.groupEnd()


//en fuciones

 let CuadradoPerimetro = (ladoCuadrado) => ladoCuadrado * 4
console.log(CuadradoPerimetro(10))

let areaTriangulo = (base,altura) => (base * altura) / 2 
console.log(areaTriangulo(10,20))


const PI = Math.PI
let diametroCirculo = radio => radio * 2

let perimetroCirculo = radio => diametroCirculo(radio)* PI
console.log(perimetroCirculo(5))

//interacción con html
function calcularPCuadrado(){
    const input = document.getElementById("InputCuadrado")//permite obtener elemento id del html
    const value = input.value //traemos el valor lo que el usuasrio escribio
                             //llamar al input(la vriiable que definimos anteriormente) y su propiedad value     
    const perimetro = CuadradoPerimetro//funcion que hicimos anteriormente para calcular el perimetro
    alert(perimetro)
}










