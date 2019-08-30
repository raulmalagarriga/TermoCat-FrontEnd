
getProductosExplorar = () => {
	let url = 'http://localhost:3000/empresa/producto/all';
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
			imprimirProductosExplorar();
		});

}

function imprimirProductosExplorar() {
	data.forEach(element => {
		let tr = document.createElement('tr');
		let td = [document.createElement('td'), document.createElement('td'), document.createElement('td'),document.createElement('td')];

		td[0].innerHTML= data.direccion_sucursal;
		td[1].innerHTML= data.descripcion_producto;
        td[2].innerHTML= data.existencia_producto;
        td[3].innerHTML= data.costo_producto;
        tr.id = data.descripcion_producto;
        
		tr.appendChild(td);
		document.getElementById("productosE").appendChild(tr);
	});
}

function filtrar(){

}
