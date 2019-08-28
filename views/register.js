function $(id) {
	return document.getElementById(id);
}
function createAccount(){
	var data = {
			username: document.getElementById('username').value,
			nombre: document.getElementById('name').value,
            apellido: document.getElementById('lastname').value,
            contraseña: document.getElementById('password').value,
    }; 
    console.log(data)  
    let config = {
		method: 'POST',
		body: JSON.stringify(data),
		headers:{
			'Content-Type' : 'application/json'
		}
        };
	fetch("http://localhost:3000/register", config)
		.then(function(response){
			return response.json();
		})
		.then(function(data){
			console.log(data);
			alert(data.message);
			if(data.redirect != null && data.redirect != undefined){
            	window.location.href = 'login.html';
         	}
		});
	}
	function empty(){
		document.getElementById("start2").disabled = !document.getElementById("username").value.length;
		document.getElementById("start2").disabled = !document.getElementById("name").value.length;
		document.getElementById("start2").disabled = !document.getElementById("lastname").value.length;
		document.getElementById("start2").disabled = !document.getElementById("password").value.length;
	}	

document.getElementById("start2").addEventListener("click", createAccount);