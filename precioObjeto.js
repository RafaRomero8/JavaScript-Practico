
let cupones =[
    {name:"Batman",
     discount: 15 
    },
    {
         name:"Superman",
         discount:10
    },
    {
        name:"flash",
        discount:18
    }
]

const isCouponValueValid = (cupones) => {
    return cupones.name === couponValue;
};

const userCoupon = cupones.find(isCouponValueValid);

if (!userCoupon) {
    alert("El cupón " + userCouponValue + "no es válido");
}

else {
    const descuento = userCoupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}

