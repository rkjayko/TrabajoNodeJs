const hbs = require('hbs');

hbs.registerHelper('hola', (nota1, nota2) =>{
	return (nota1 + nota2)/2
})

hbs.registerHelper('listar',()=>{
	listaEstudiantes = require('./listado.json');
	let texto = "<table> \
				<thead> \
				<th>Nombre </th>\
				<th>Matematica</th>\
				<th>Ingles </th>\
				<th>Programacion </th>\
				</thead> \
				<tbody> ";

	' lista de estudiantes <br>';
	listaEstudiantes.forEach(estudiante =>{
		texto = texto + 
		'<tr>' + 
		'<td>' + estudiante.nombre + '</td>' +
		'<td>' + estudiante.matematicas + '</td>' +
		'<td>' + estudiante.ingles + '</td>'  +
		'<td>' + estudiante.programacion + '</td></tr>'
		

	})
	texto = texto + '</tbody></table>';
	return texto;
})