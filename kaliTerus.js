function multipleAgain(angka, i, jumlah){
    if(i === jumlah){
      return 1
    } else{
      return Number(angka[i]) * multipleAgain(angka, i+1, jumlah)
    }
  }
  
  function kaliTerusRekursif(angka) {
    // you can only write your code here!
    var angkaString = String(angka)
   while(angkaString.length > 1){
     angkaString = multipleAgain(angkaString, 0, angkaString.length).toString()
  }
     return Number(angkaString)
  }
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0 
  console.log(kaliTerusRekursif(1231)); // 6