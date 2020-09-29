var articulos = [
  { nombre: "Bici", costo: 3000 },
  { nombre: "Tv", costo: 2500 },
  { nombre: "Libro", costo: 320 },
  { nombre: "Celular", costo: 10000 },
  { nombre: "Laptop", costo: 20000 },
  { nombre: "Teclado", costo: 500 },
  { nombre: "Audifonos", costo: 1700 }
]

var articulosFiltrados = articulos.filter(art => art.costo <= 500) // Crean un nuevo array

var nombreArticulos = articulos.map(art => art.nombre) // Crea un nuevo array

var encuentraArticulo = articulos.find(art => art.nombre === "Laptop") 

articulos.forEach(art => {
  console.log(art.nombre);
}) // Es como un ciclo for

var articulosBaratos = articulos.some(art => art.costo <= 700) // nos devuelve true