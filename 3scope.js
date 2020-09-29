let nombre = "Tomás"

function fun() {
  let nombre = "Franco" // Se genera una variable temporal que concidentemente tiene el mismo nombre que una variable global
  let apellido = "Salina"
  console.log(`Hola ${nombre} ${apellido}`)
}

fun()