replaceText(document.body)

var numero = Math.round(Math.random() * 25);

function writingTheTimePrice(){

	console.log("working");
	// var salarioMinino = 120;
	// var horasLaborales = 8;
	// var salarioxhora = 120/8;
	descuento =Math.round(Math.random()*25)/100;
    console.log(descuento)

    var amount_items = document.querySelectorAll("span.price-tag-fraction")
    
    for(amount_item in amount_items){
        // console.log(amount_item)
        var cantidadHolder = amount_items[amount_item];
        var cantidad = amount_items[amount_item].innerHTML;
        // console.log(cantidad)
        if(cantidad.includes('')){
            cantidad = cantidad.replace(/,/g, '')
        }
        cantidad =parseInt(cantidad)
        cantidad = Math.round((cantidad *descuento)+cantidad)
        
        
        cantidadHolder.innerHTML = String(cantidad);
    }
    

}
