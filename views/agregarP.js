function $(id) {
	return document.getElementById(id);
}

let id_product;

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
		headers:{
			'Content-Type' : 'application/json'
		}
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
/*function empty() {
	document.getElementById("start3").disabled = !document.getElementById("id_sucursal").value.length;
    document.getElementById("start3").disabled = !document.getElementById("descripcion_producto").value.length;
    document.getElementById("start3").disabled = !document.getElementById("existencia_producto").value.length;
    document.getElementById("start3").disabled = !document.getElementById("costo_producto").value.length;
}*/

document.getElementById("start3").addEventListener("click", AgregarProducto);

getProductos = () => {
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
			imprimirProductos();
		});

}

function imprimirProductos() {
	data.forEach(element => {
		let tr = document.createElement('tr');
		let td = [document.createElement('td'), document.createElement('td'), document.createElement('td'),document.createElement('td')];

		td[0].innerHTML= data.id_sucursal;
		td[1].innerHTML= data.descripcion_producto;
        td[2].innerHTML= data.existencia_producto;
        td[3].innerHTML= data.costo_producto;
        tr.id = data.descripcion_producto;
		tr.onclick(e, {
			id_product = e.currentTarget.id
		})
        
		tr.appendChild(td);
		document.getElementById("productos").appendChild(tr);
	});
}

function eliminarProducto(id_product) {
	fetch( '/' + id_product, {
	  method: 'delete'
	}).then(response =>
	  response.json().then(json => {
		return json;
	  })
	);
  }

document.getElementById('id_sucursal').value = sessionStorage.getItem("");
document.getElementById("descripcion_producto").value = sessionStorage.getItem("");
document.getElementById('existencia_producto').value = sessionStorage.getItem("");
document.getElementById("costo_producto").value = sessionStorage.getItem("");


function modificarProducto() {
	var data = {
		id_sucursal: document.getElementById('id_sucursal2').value,
		id_product,
        existencia_producto: document.getElementById('existencia_producto2').value,
        costo_producto: document.getElementById('costo_producto2').value,
	};
	console.log(data)
	let config = {
		method: 'PUT',
		body: JSON.stringify(data),
		headers:{
			'Content-Type' : 'application/json'
		}
	};
	fetch("", config)
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
document.getElementById("start100").addEventListener("click", modificarProducto);