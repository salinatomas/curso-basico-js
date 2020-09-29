var estudiantes = ['Maria', 'Sergio', 'Rosa', 'Daniel']

function saludarEstudiante(estudiante) {
  console.log(`Hola, ${estudiante}`);
}

for (var i = 0; i < estudiantes.length; i++) {
  saludarEstudiante(estudiantes[i])
}

for (var estudiantito of estudiantes) {
  saludarEstudiante(estudiantito)
}

for (var estudiantito in estudiantes) {
  saludarEstudiante(estudiantes[estudiantito])
}