//Business Logic
function translateInputBeepBoop(number){
let outputArray=[];
  for(let i=0; i<=number; i++){
    outputArray.push(i.toString());
  }
  outputArray.forEach(function(element, index){
    if (element.includes(3)) {
      outputArray.splice(index, 1, "Won't you be my neighbor ");
    } else if(element.includes(2)){
      outputArray.splice(index, 1, "Boop ");
    } else if(element.includes(1)){
      outputArray.splice(index, 1, "Beep ");
    }
  });
  return outputArray;
}

// User Logic
$(document).ready(function(){
  $("form#form").submit(function(event){
    event.preventDefault();
    const userNumber=$("input#numberInput").val();
    $("#result").html(translateInputBeepBoop(userNumber));
  });
});

