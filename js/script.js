let km = prompt("Quanti km vuoi percorrere?")
let eta = prompt("Quanti anni hai?")

prezzo_km = (km * 0.21)
console.log(prezzo_km)

if(eta < 18){
    let costo = (prezzo_km - prezzo_km * 0.2)
    costo = costo.toFixed(2);
    console.log(costo)
    document.getElementById("costo").innerHTML = document.getElementById("costo").innerHTML + costo
}

else if(eta >= 65){
    let costo = (prezzo_km - prezzo_km * 0.4)
    costo = costo.toFixed(2);
    console.log(costo)
    document.getElementById("costo").innerHTML = document.getElementById("costo").innerHTML + costo
    
}

else{
    let costo = prezzo_km
    costo = costo.toFixed(2);
    console.log(costo)
    document.getElementById("costo").innerHTML = document.getElementById("costo").innerHTML + costo
}
