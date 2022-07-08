let i = 10
let valor = 1
while (true) {
    valor *= i
    i--
    if (i <= 0) {
        break
    }
}
console.log("!10 = " + valor)