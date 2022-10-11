const express = require('express');
const app = express();

app.use(express.json());

const estudiantes = [
{id: 1, name: 'Ronaldo', age: 20, enroll: true},
{id: 2, name: 'Alfredo', age: 19, enroll: false},
{id: 3, name: 'Dennis', age: 18, enroll: false},
];

app.get('/', (req, res) =>{
	res.send('API NODE.JS');
});
app.get('/api/estudiantes', (req, res) =>{
	res.send(estudiantes);
});

app.get('/api/estudiantes/:id', (req, res) =>{
	const estudiante = estudiantes.find(c => c.id === parseInt(req.params.id));
	if (!estudiante)return re.status(404).send('Estudiante no encontrado');
	else res.send(estudiante);
});

app.post('/api/estudiantes', (req, res)=>{
	const estudiante = {
		id: estudiantes.length + 1,
		name: req.body.name,
		age: parseInt(req.body.age),
		enroll: (req.body.enroll === 'true')
	};

	estudiantes.push(estudiante);
	res.send(estudiante);
});

app.delete('/api/estudiantes/:id', (req, res) =>{
	const estudiante = estudiantes.find(c => c.id === parseInt(req.params.id));
	if (!estudiante) return res.status(404).send('Estudiante no encontrado');

	const index = estudiantes.indexOf(estudiante);
	estudiantes.splice(index, 1);
	res.send(estudiante);
});

const port = process.env.port || 3000;
app.listen(port, () => console.log(`Escuchando en puerto ${port}...`));