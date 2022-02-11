//Business Logic
function userInput(number){
  const notValid="This Input is not valid"
  if (number.length === 0){
    return notValid
  }
  let outputArray=[];
  for(let i=0; i<=number; i++){
    outputArray.push(i.toString())
  }
  outputArray.forEach(function(element, index){
    if (element.includes(3)) {
    (outputArray.splice(index, 1, "Won't you be my neighbor"))
    } else if(element.includes(2)){
      (outputArray.splice(index, 1, "Boop"))
    }else if(element.includes(1)){
      (outputArray.splice(index, 1, "Beep"))
    }
    return outputArray;
  }) 
  console.log(outputArray)
  
}

// function misterRogers(outputArray){
//   let resultArray=[]
//   outputArray.forEach(function(element){
//     if (element.includes(3)){
//       resultArray.push("x")
//     }
//   })

// }

