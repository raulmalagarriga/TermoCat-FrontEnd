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
}
document.getElementById("start2").addEventListener("click", createAccount);