function $(id) {
	return document.getElementById(id);
}

function logIn(){
    let body = {
        username: document.getElementById("username").value,
       password: document.getElementById("password").value
    };
   console.log(body)
    fetch("./Login", {method: "POST", body:JSON.stringify(body)})
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
          }
        });
 }
 $("start").addEventListener("click", logIn);
