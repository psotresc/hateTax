var mode = "";
var status ="";
var automatic ="";
var randomTime;
var timerInterval;

/**********************
*	General Constants
***********************/


/**********************
*	Search And interact
***********************/

function writingTheTimePrice(){

	console.log("working");
	// var salarioMinino = 120;
	// var horasLaborales = 8;
	// var salarioxhora = 120/8;
	descuento =Math.random()*25;

	var amount = document.getElementsByClassName("price-tag-fract")[0];
	if(amount != null){
		clearInterval(timerInterval);
		var amount_items = document.getElementsByClassName("amount");
		for(amount_item in amount_items){

				var timePriceHolder = amount_items[amount_item];
				var timePrice = amount_items[amount_item].innerHTML;

				timePrice = timePrice.replace("<small>$</small>","")
				console.log(timePrice)
				timePrice = parseInt(timePrice);

				var valorTiempo  = timePrice/salarioxhora
				valorTiempo = valorTiempo.toFixed(2);
				console.log("salario por hora: "+valorTiempo)
				timePriceHolder.innerHTML = String(valorTiempo)+"<small> horas</small>";


		}


	}


	var price_item = document.getElementsByClassName("a-product__paragraphDiscountPrice")[0];
	if (price_item != null ) {

		console.log("salario por hora: "+salarioxhora)
		var timePrice = document.getElementsByClassName("a-product__paragraphDiscountPrice")[0].innerHTML;
		timePrice = timePrice.replace("$","")
		timePrice = timePrice.replace(",","")
		timePrice = timePrice.replace('<sup class="undefined">00</sup>',"")
		timePrice = timePrice.replace('<sup class="undefined">00</sup>',"")
		timePrice = timePrice.replace('<!-- -->',"")

		timePrice = parseInt(timePrice);

		var valorTiempo  = timePrice/salarioxhora

		valorTiempo = valorTiempo.toFixed(2);

		console.log("salario por hora: "+valorTiempo)


		console.log(valorTiempo);

		document.getElementsByClassName("a-product__paragraphDiscountPrice")[0].innerHTML = String(valorTiempo)+" horas" ;
		clearInterval(timerInterval);
	}
	var prices_list = document.getElementsByClassName("a-card-discount")[0];
	if(prices_list != null){
		var prices = document.getElementsByClassName("a-card-discount");
		console.log(prices_list.length)
		for( var price in prices){

			try{
				var timePriceHolder = prices[price];
				var timePrice = prices[price].innerHTML;
				timePrice = timePrice.replace("$","")
				timePrice = timePrice.replace(",","")
				timePrice = timePrice.replace('<sup class="undefined">00</sup>',"")
				timePrice = timePrice.replace('<sup class="undefined">00</sup>',"")
				timePrice = timePrice.replace('<!-- -->',"")
				timePrice = parseInt(timePrice);

				var valorTiempo  = timePrice/salarioxhora

				valorTiempo = valorTiempo.toFixed(2);
				console.log(timePriceHolder)

				timePriceHolder.innerHTML = String(valorTiempo)+" horas" ;
			}catch(e){

			}

			clearInterval(timerInterval);

		}


	}


}

/**********************
*	Working / Init
***********************/

function working(){

	//console.log(':::::::::::: Extension: Working ::::::::::::');

	timerInterval = setInterval(writingTheTimePrice, 1000);

	//console.log(":::::::::::: Extension: Writing Header Info ::::::::::::");

	//setTimeout(function(){
	//		console.log(":::::::::::: Extension: Time reached / Seeking ::::::::::::");
	//	searchNInteract();
	//}, randomTime);
}

/**********************
*	On load / Extension status
***********************/

(function(){

	working();
})();
