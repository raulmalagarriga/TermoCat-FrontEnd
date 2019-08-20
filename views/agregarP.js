function $(id) {
	return document.getElementById(id);
}

document.getElementById('id_sucursal').value = sessionStorage.getItem("");
document.getElementById("descripcion_producto").value = sessionStorage.getItem("");
document.getElementById('existencia_producto').value = sessionStorage.getItem("");
document.getElementById("costo_producto").value = sessionStorage.getItem("");


function AgregarProducto() {
	var data = {
		id_sucursal: document.getElementById('id_sucursal').value,
        descripcion_producto: document.getElementById('descripcion_producto').value,
        existencia_producto: document.getElementById('existencia_producto').value,
        costo_producto: document.getElementById('costo_producto').value,
	};
	console.log(data)
	let config = {
		method: 'POST',
		body: JSON.stringify(data),
	};
	fetch("http://localhost:3000/empresa/sucursales/1", config)
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
	document.getElementById("start3").disabled = !document.getElementById("id_sucursal").value.length;
    document.getElementById("start3").disabled = !document.getElementById("descripcion_producto").value.length;
    document.getElementById("start3").disabled = !document.getElementById("existencia_producto").value.length;
    document.getElementById("start3").disabled = !document.getElementById("costo_producto").value.length;
}

document.getElementById("start3").addEventListener("click", AgregarProducto);

getSucursales = () => {
	let url = 'http://localhost:3000/empresa/sucursales/1';
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
			getProductos();
		});

}

function getProductos() {
	data.forEach(element => {
		let tr = document.createElement('tr');
		let td = [document.createElement('td'), document.createElement('td'), document.createElement('td'),document.createElement('td')];

		td[0].innerHTML= data.id_sucursal;
		td[1].innerHTML= data.descripcion_producto;
        td[2].innerHTML= data.existencia_producto;
        td[3].innerHTML= data.costo_producto;
        
        
		tr.appendChild(td);
		document.getElementById("productos").appendChild(tr);
	});
}