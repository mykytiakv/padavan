window.onload = function(){
	var request = new XMLHttpRequest();
	var requestURL = 'https://api.chucknorris.io/jokes/categories';
	request.open('GET', requestURL);
	request.responseType = 'json';
	request.send();
	var menu = document.getElementById("navbar");
	request.onload = function() {
  	var categoryJson = request.response;
	  showCategory(categoryJson);
	}

	function showCategory(categoryJson){
		categoryJson.forEach(function(element, index, array){
			var btn = document.createElement("BUTTON");        
			var text = document.createTextNode(element);  
			btn.appendChild(text);                               
			var style = btn.style;
			style.margin = "12px";
			style.color = "white";
			style.borderRadius = "5px";
			style.background = "green";
			menu.appendChild(btn);
				btn.onclick = function(){
					var requestURL = "https://api.chucknorris.io/jokes/random?category=" + element;
					console.log(requestURL);
				ajaxGet(requestURL);
	}
	});
	}
}

function ajaxGet(requestURL){
	var request = new XMLHttpRequest();

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
