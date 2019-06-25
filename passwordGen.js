function changeVocals (str) {
    //code di sini
    var afterVocals = 'abijuvefop'
    var result = ''
    for(i = 0; i < str.length; i++){
      if('aiueo'.indexOf(str[i])!=-1 || 'AIUEO'.indexOf(str[i])!=-1){
          for(j = 0; j < afterVocals.length; j++){
           if(str[i] == afterVocals[j]){
             result += afterVocals[j+1]
           } else if (str[i] ==  afterVocals[j].toUpperCase()){
             result += afterVocals[j+1].toUpperCase()
           }
          }
      } else {
        result += str[i]
      }
    }
    return result
  }
  
  function reverseWord (str) {
    //code di sini
    var result = ''
    for(i = str.length-1; i >=0 ; i--){
      result += str[i]
    }
    return result
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    var result = ''
    for(i = 0; i < str.length; i++){
      if(str[i] === str[i].toUpperCase()){
        result += str[i].toLowerCase()
      } else {
        result += str[i]
      }
    }
    return result
  }
  
  function removeSpaces (str) {
    //code di sini
    var result = ''
    for(i = 0; i < str.length; i++){
  if(str[i] != ' '){
      result += str[i]
    }
    }
    
    return result
  }
  
  function passwordGenerator (name) {
    //code di sini
    if(name.length < 5){
  return 'Minimal karakter yang diinputkan adalah 5 karakter'
    } else{
    var changeAlfa = changeVocals(name)
    var reverseMe = reverseWord(changeAlfa)
    var lowerMe = setLowerUpperCase(reverseMe)
    var result = removeSpaces(lowerMe)
    return result
    }
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'