function totalDigitRekursif(angka) {
  // you can only write your code here!
var angkaString = String(angka)
  if(angkaString.length === 1){
  return angka
  } else {
    var angkaBaru = Number(angkaString[0])
    angka2 = angkaString.slice(1)
    console.log(angka2)
    return angkaBaru + totalDigitRekursif(Number(angka2))
}
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5