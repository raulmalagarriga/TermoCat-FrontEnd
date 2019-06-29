function $(id) {
	return document.getElementById(id);
}
function createAccount(){
	var data = {
			username: $('username').value,
			name: $('name').value,
            lastname: $('lastname').value,
            password: $('password').value,
    }; 
    console.log(data)  
    let config = {
		method: 'POST',
		body: JSON.stringify(data),
        };
	fetch("./Register", config)
		.then(function(response){
			return response.json();
		})
		.then(function(data){
			console.log(data);
			alert(data.message);
			if(data.redirect != null && data.redirect != undefined){
            	window.location.href = data.redirect;
         	}
		});
	}

document.getElementById("start2").addEventListener("click", createAccount);