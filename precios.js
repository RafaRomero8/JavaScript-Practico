//
let precioOriginal = 120
let descuento = 18


//IMPREME 4 OBJETOS su valor
//console.log({ 
  //  precioOriginal,
   // descuento,
    //porcentajePrecioConDescuento,
    //precioConDescuento
//})

let calcularPrecioConDescuento = (precio,descuento)=>{

    let porcentajePrecioConDescuento = 100 - descuento
    let precioConDescuento = (precio * porcentajePrecioConDescuento)/100
    return precioConDescuento
}

let PriceDiscount = () => {
    const  inputPrice = document.getElementById("InputPrice").value
    //let priceValue = inputPrice.value
    const  inputDiscount = document.getElementById("InputDiscount").value
    //let discountValue = inputDiscount.value
                                                          //(priceValue,discountValue)
    const precioConDescuento = calcularPrecioConDescuento(inputPrice,inputDiscount)
    const resultP = document.getElementById("ResultP")
   resultP.innerText = (`El precio con descuentoo son: $ ${precioConDescuento}`) 
}
//transition: all 1s;aplicarlo en css


//con objetos










