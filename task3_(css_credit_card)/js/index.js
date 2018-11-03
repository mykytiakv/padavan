window.onload = function(){
	var input = document.getElementById('cardNumeberInput');
	var result = document.getElementById('cardNumeber');

	input.onkeyup =  input.oncopy = input.onpaste = input.oncut = (function() {
	    return function() {
	         result.innerHTML = this.value;
	    }
	})();
}