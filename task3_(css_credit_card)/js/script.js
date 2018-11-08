window.onload = function(){

	$('#cardNumberInput1').on('input', function() {

    var number1 = document.getElementById('cardNumberInput1').value;
    var number2 = document.getElementById('cardNumberInput1');
    var visa = document.getElementById('visa');
    var mastercard = document.getElementById('mastercard');

		for (var i in ['input', 'change', 'blur', 'keyup']) {
		number2.addEventListener('input', formatCardCode, false);
		}
		function formatCardCode() {
		    var cardCode = this.value.replace(/[^\d]/g, '').substring(0,16);
		    cardCode = cardCode != '' ? cardCode.match(/.{1,4}/g).join(' ') : '';
		    this.value = cardCode;
		  }

    if (number1.match(/[а-я,А-я,a-z,A-z]/g)){
      alert("Введіть будьласка тільки цифри");
      $('#cardNumberInput1').val(number1);
    }

    else{
    	if(number2.value.length==0){
    	$('#cardNumber1').html('**** **** **** ****');
    	}
    	else{
      document.getElementById('cardNumber1').innerHTML = number1;}
    if (number1[0] == 4){
      visa.style.display = "inline";
      mastercard.style.display = "none";
    }
    else if (number1[0] == 5){
      mastercard.style.display = "inline";
      visa.style.display = "none";
    }
    else{
      mastercard.style.display = "none";
      visa.style.display = "none";
    }
   }
  });
  $('#dateInput').on('input', function() {
    var date = document.getElementById('dateInput').value;
    document.getElementById('date').innerHTML = date;
  });
  $('#yearInput').on('input', function() {
    var year = document.getElementById('yearInput').value;
    document.getElementById('year').innerHTML = year;
  });
  $('#cardOwnerInput').on('input', function() {
    var owner = document.getElementById('cardOwnerInput').value;
    if (owner.match(/[0-9]/g)){
      alert("Введіть будь ласка тільки букви");
      $('#cardOwnerInput').val('');
    }  
    else{
    document.getElementById('card-holder').innerHTML = owner;
    }
  });
  //CVV
  $('#cardCVVInput').focus(function() {
  // 	var dimensions = document.getElementById("Rotate").getBoundingClientRect();

		// document.body.appendChild(document.createTextNode(dimensions.width + " x " + dimensions.height));
  	document.getElementById('Rotate').style.transform = "rotateY(180deg)";
  	// var b = 0;
  	// var a = document.getElementById('Rotate').style.transform = "rotateY(" + b + "deg)";
  	document.getElementById('Rotate').style.transition  = "all 1.5s";
  	// if (document.getElementById('Rotate').style.transform == "rotateY(180deg)"){
    document.getElementById('card-number').style.display = 'none';
    document.getElementById('card-expire').style.display = 'none';
    document.getElementById('card-holder').style.display = 'none';
    document.getElementById('imgCard').style.display = 'none';
    document.getElementById('cvv').style.display = 'flex';
    document.getElementById('cvv').style.transform = 'scaleX(-1)';
    document.getElementById('card-company').style.transform = 'scaleX(-1)';
    // }
	  $('#cardCVVInput').on('input', function() {
	    var number = document.getElementById('cardCVVInput').value;
	    if (number.match(/[а-я,А-я,a-z,A-z]/g)){
	      alert("Введіть будь ласка тільки цифри");
	      $('#cardCVVInput').val('');
	    }  
	    else{
	    document.getElementById('cvvCode').innerHTML = number;
	  }})
  });
  // $('#cardNumberInput1').blur(function() {
  //   var number = document.getElementById('cardNumberInput1');
  //   if (number.value.length === 0){
  //     $('#cardNumber1').html('**** **** **** ****');
  //   }
  // })
  $('#cardOwnerInput').blur(function() {
    var owner = document.getElementById('cardOwnerInput');
    if (owner.value.length < 4){
      $('#cardOwnerInput').val('');
      $('#cardOwner').html('****');
    }
  })
  $('#cardCVVInput').blur(function() {
    var owner = document.getElementById('cardCVVInput');
    var rotate = document.getElementById('Rotate');

    rotate.style.transform = "rotateY(360deg)";
    rotate.style.transition  = "all 1.5s";
    document.getElementById('card-company').style.transform = 'scaleX(1)';
    document.getElementById('card-number').style.display = 'flex';
    document.getElementById('card-expire').style.display = 'flex';
    document.getElementById('card-holder').style.display = 'flex';
    document.getElementById('cvv').style.display = 'none';
    document.getElementById('imgCard').style.display = 'inline';
    if (owner.value.length < 3){
      $('#cardCVVInput').val('');
      $('#cvvCode').html('***');
    }
  })
}
