
 let CuadradoPerimetro = ladoCuadrado => ladoCuadrado * 4
 //console.log(CuadradoPerimetro(10))
 let areaCuadrado = ladoCuadrado=>ladoCuadrado * ladoCuadrado
 
 let areaTriangulo = (base,altura) => (base * altura) / 2 
 //console.log(areaTriangulo(10,20))

 const PI = Math.PI
//let diametroCirculo = radio => radio * 2

let perimetroCirculo = radio => diametroCirculo(radio)* PI
//console.log(perimetroCirculo(5))
//interacción con html
 let calcularPCuadrado= () => {
     
    const input = document.getElementById("InputCuadrado")//permite obtener elemento id del html
    const value = input.value //traemos el valor lo que el usuasrio escribio
                             //llamar al input(la vriiable que definimos anteriormente) y su propiedad value     
    const perimetro = CuadradoPerimetro(value)//funcion que hicimos anteriormente para calcular el perimetroy
                        //enviarle como argumento el valor(value)que los usarios quieren calcular 
    alert(perimetro)
}

let calcularACuadrado= () => {
    const input = document.getElementById("InputCuadrado")
    const value = input.value
    const area = areaCuadrado(value)
    alert(area)
}


