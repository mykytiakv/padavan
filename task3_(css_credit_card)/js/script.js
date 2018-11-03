function result(){
	var number1 = document.getElementById('cardNumberInput1').value;
	var number2 = document.getElementById('cardNumberInput2').value;
	var number3 = document.getElementById('cardNumberInput3').value;
	var number4 = document.getElementById('cardNumberInput4').value;
	var date = document.getElementById('dateInput').value;
	var year = document.getElementById('yearInput').value;
	var owner = document.getElementById('cardOwnerInput').value;
	var cvv = document.getElementById('cardCVVInput').value;
	document.getElementById('cardNumber1').innerHTML = number1;
	document.getElementById('cardNumber2').innerHTML = number2;
	document.getElementById('cardNumber3').innerHTML = number3;
	document.getElementById('cardNumber4').innerHTML = number4;
	document.getElementById('date').innerHTML = date;
	document.getElementById('year').innerHTML = year;
	document.getElementById('cardOwner').innerHTML = owner;
	// document.getElementById('cardCVV').innerHTML = cvv;
	
}