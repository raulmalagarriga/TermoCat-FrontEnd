function $(id) {
	return document.getElementById(id);
}

function logIn(){
    let body = {
        username: document.getElementById("username").value,
       contraseña: document.getElementById("password").value
    };
   console.log(body)
    fetch("http://localhost:3000/login", {
        method: "POST", 
        body:JSON.stringify(body),
        headers:{
			'Content-Type' : 'application/json'
		}
    })
        .then(function(resp){
            return resp.json();
        })
        .then(function(data){
            console.log(data);
            if(data.status != undefined && data.status != null && data.status == 500){
                alert(data.message);
            }else if(data.redirect != null && data.redirect != undefined){
                sessionStorage.setItem("name",body.username);
             window.location.href = data.redirect;
          }else if(data.message.includes("Banned") && data.status == 200){
              alert(data.message);
              window.location.href = 'acercade.html';
          }
        });
        
 }
 function empty(){
    document.getElementById("start").disabled = !document.getElementById("username").value.length;
    document.getElementById("start").disabled = !document.getElementById("password").value.length;
}
 $("start").addEventListener("click", logIn);
