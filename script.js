window.onload = function(){
	var request = new XMLHttpRequest();
	var requestURL = 'https://api.chucknorris.io/jokes/categories';
	request.open('GET', requestURL);
	request.responseType = 'json';
	request.send();
	request.onload = function() {
  	document.querySelector('#cat1').innerHTML = request.response[0];
		document.querySelector('#cat2').innerHTML = request.response[1];
		document.querySelector('#cat3').innerHTML = request.response[2];
		document.querySelector('#cat4').innerHTML = request.response[3];
	}
	document.querySelector('#cat1').onclick = function(){
		var selectedCategory = request.response[0];
		ajaxGet();
	}
	document.querySelector('#cat2').onclick = function(){
		var selectedCategory = request.response[1];
		ajaxGet();
	}
	document.querySelector('#cat3').onclick = function(){
		var selectedCategory = request.response[2];
		ajaxGet();
	}
	document.querySelector('#cat4').onclick = function(){
		var selectedCategory = request.response[3];
		ajaxGet();
	}
	document.querySelector('#search').onclick = function(){
		search();
	}
}

function ajaxGet(selectedCategory){
	var request = new XMLHttpRequest();
	if (selectedCategory == request.response[0]){
		var requestURL = 'https://api.chucknorris.io/jokes/random?category=explicit';
	}
	else if (selectedCategory == request.response[1]){
		var requestURL = 'https://api.chucknorris.io/jokes/random?category=dev';
	}
	else if (selectedCategory == request.response[2]){
		var requestURL = 'https://api.chucknorris.io/jokes/random?category=movie';
	}
	else if (selectedCategory == request.response[3]){
		var requestURL = 'https://api.chucknorris.io/jokes/random?category=food';
	}

	request.open('GET', requestURL);

	request.responseType = 'json';
	request.send();

	request.onload = function() {
	  var jokesJson = request.response;
	  showJokes(jokesJson);
}

	function showJokes(jsonObj) {
	var icon = document.querySelector('#iconUrl');
  icon.src = jsonObj['icon_url'];
  document.querySelector('#id').innerHTML = '"ID": ' + jsonObj['id'];
  document.querySelector('#url').innerHTML = '"URL": ' + jsonObj['url'];
  document.querySelector('#value').innerHTML = '"VALUE": ' + jsonObj['value'];
	}
}

// function search(){
// 	var request = new XMLHttpRequest();
// 	var requestURL = 'https://api.chucknorris.io/jokes/search?query={query}';

// 	request.open('GET', requestURL);

// 	request.responseType = 'json';
// 	request.send();

// 	request.onload = function() {
// 	  var search = request.response;
// 	  showJokes(search);
// }

// 	function showJokes(jsonObj) {
//   document.querySelector('#search').innerHTML = '"RESULT": ' + jsonObj['result'];
// 	}
// }