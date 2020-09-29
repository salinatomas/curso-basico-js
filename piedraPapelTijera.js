var op1 = "Piedra"
var op2 = "Papel"
var op3 = "Tijera"

function resultado(user, cpu) {
  var win = `Has ganado contra ${cpu}!!`
  var lose = `La CPU ganó con ${cpu}!!`

  if(user === cpu) {
    console.log("Empate")
  } else {
    switch (true) {
      case (user === op1 && cpu === op3):
        console.log(win)
        break
      case (user === op2 && cpu === op1):
        console.log(win)
        break
      case (user === op3 && cpu === op2):
        console.log(win)
        break
      default:
        console.log(lose)
    }
  }
}

resultado(op1, op3) // Has ganado contra tijera



// if(user === op1 && cpu === op3) {
//   console.log(win)
// } else if(user === op2 && cpu === op1) {
//   console.log(win)
// } else if(user === op3 && cpu === op2) {
//   console.log(win)
// } else {
//   console.log(lose)
// }