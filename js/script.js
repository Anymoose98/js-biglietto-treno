let km = prompt("Quanti km vuoi percorrere?")
let eta = prompt("Quanti anni hai?")

prezzo_km = (km * 0.21)
console.log(km)

if(eta < 18){
    let costo = (prezzo_km - prezzo_km * 0.2)
    console.log(costo)
}

else if(eta > 65){
    let costo = (prezzo_km - prezzo_km * 0.4)
    console.log(costo)
}

else{
    let costo = prezzo_km
    console.log(costo)
}
