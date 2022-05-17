let length = 20
let width = 15

function roomArea () {
  return length * width
  
}

// (i++) === (i = i + 1)
console.log(roomArea())
for(let i = 0; i < 10; i++){
  console.log(roomArea())
}
