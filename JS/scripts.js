//Business Logic
function userInput(number){
  const notValid="This Input is not valid"
  if (number.length === 0){
    return notValid
  }
  let outputArray=[];
  for(let i=0; i<=number; i++){
    outputArray.push(i)
  }
  return outputArray


}


