document.getElementById('userDropdown').innerHTML = sessionStorage.getItem("name");


function logOut(){
    let config = {
         method: 'GET',
         headers:{
			'Content-Type' : 'application/json'
		}
     };
     fetch("http://localhost:3000/Logout", config)
     .then(function(res){
         return res.json();
     })
     .then(function(data){
         if(data.redirect != null && data.redirect != undefined){
             sessionStorage.clear();
             window.location.href = data.redirect;
             window.location.href = 'index.html';

         }
     })
}


document.getElementById("LogOut1").addEventListener("click", logOut);