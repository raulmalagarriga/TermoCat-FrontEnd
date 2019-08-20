function $(id) {
	return document.getElementById(id);
}

document.getElementById('IdEmpresa').value = sessionStorage.getItem("");
document.getElementById("Descripcion").value = sessionStorage.getItem("");
document.getElementById("Correo").value = sessionStorage.getItem("");
document.getElementById("Telefono").value = sessionStorage.getItem("");

function EditarEmpresa() {
	var data = {
		nombre_empresa: document.getElementById('IdEmpresa').value,
		descripcion_empresa: document.getElementById('Descripcion').value,
		correo_empresa: document.getElementById('Correo').value,
		fax_empresa: document.getElementById('Telefono').value,
	};
	console.log(data)
	let config = {
		method: 'POST',
		body: JSON.stringify(data),
		headers:{
			'Content-Type' : 'application/json'
		}
	};
	fetch("http://localhost:3000/empresa", config)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			console.log(data);
			alert(data.message);
			if (data.redirect != null && data.redirect != undefined) {
				window.location.href = data.redirect;
			}
		});
}
function empty() {
	document.getElementById("start3").disabled = !document.getElementById("IdEmpresa").value.length;
	document.getElementById("start3").disabled = !document.getElementById("Descripcion").value.length;
	document.getElementById("start3").disabled = !document.getElementById("Correo").value.length;
	document.getElementById("start3").disabled = !document.getElementById("Telefono").value.length;
}

document.getElementById("start3").addEventListener("click", EditarEmpresa);


getEmpresa = () => {
	let url = 'http://localhost:3000/empresa';
	let config = {
		method: 'GET',
		body: JSON.stringify(data),
	};
	fetch(url, config)
		.then(response => {
			response.json();
		})
		.then(data => {
			console.log(data);

		});

		getElementById("nombre_empresa").innerHTML = data.nombre_empresa;
		getElementById("nombre_empresa1").innerHTML = data.nombre_empresa;
		getElementById("descripcion_empresa").innerHTML = data.descripcion_empresa;
		getElementById("fax_empresa").innerHTML = data.fax_empresa;
		
} 
window.onload = () => {
	getEmpresa();
}