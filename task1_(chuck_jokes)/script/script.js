    $(document).ready(function(){
    	$("#myInput").on("keyup", function() {
    		var value = $(this).val().toLowerCase();
    		$("#joke *").filter(function() {
      		$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
 		});
	});
});

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
			btn.id = "btn";   
			var text = document.createTextNode(element);  
			btn.appendChild(text);                            
			menu.appendChild(btn);
			btn.onclick = function(){
				var requestURL = "https://api.chucknorris.io/jokes/random?category=" + element;
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