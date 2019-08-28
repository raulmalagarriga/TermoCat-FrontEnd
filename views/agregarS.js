function $(id) {
	return document.getElementById(id);
}

let id_sucursal; 

document.getElementById('direccion_sucursal').value = sessionStorage.getItem("");
document.getElementById("horario_sucursal").value = sessionStorage.getItem("");


function AgregarSucursal() {
	var data = {
		direccion_sucursal: document.getElementById('direccion_sucursal').value,
		horario_sucursal: document.getElementById('horario_sucursal').value,
	};
	console.log(data)
	let config = {
		method: 'POST',
		body: JSON.stringify(data),
		headers:{
			'Content-Type' : 'application/json'
		}
	};
	fetch("http://localhost:3000/empresa/sucursales", config)
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
	document.getElementById("start3").disabled = !document.getElementById("direccion_sucursal").value.length;
	document.getElementById("start3").disabled = !document.getElementById("horario_sucursal").value.length;
}

document.getElementById("start3").addEventListener("click", AgregarSucursal);

getSucursales = () => {
	let url = 'http://localhost:3000/empresa/sucursales';
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
			getSucursales();
		});

}

function getSucursales() {
	data.forEach(element => {
		let tr = document.createElement('tr');
		let td = [document.createElement('td'), document.createElement('td'), document.createElement('td')];

		td[0].innerHTML= data.id_sucursal;
		td[1].innerHTML= data.direccion_sucursal;
		td[2].innerHTML= data.horario_sucursal;
		tr.id = id_sucursal;
		tr.onclick(e, {
			id_sucursal = e.currentTarget.id

		})
		tr.addEventListener("mouseover", mouseOver, false);
		tr.addEventListener("mouseout", mouseOut, false);
		tr.appendChild(td);
		document.getElementById("sucursales").appendChild(tr);
		
		function mouseOver(){
			tr.getElementById("id_sucursal").style.color = "white";	
		}
		function mouseOut(){
			tr.getElementById("id_sucursal").style.color = "black";	
		}
	});
}

	function eliminarSucursal(id_sucursal) {
		fetch( '/' + id_sucursal, {
		  method: 'delete'
		}).then(response =>
		  response.json().then(json => {
			return json;
		  })
		);
	  }
	
