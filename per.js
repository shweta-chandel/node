// const express = require('express');
// const app = express();


// const port = 3001;
// app.listen(port,(req, res) =>{
//     console.log('Server Start', port);
// });

let Calculator = function(Score, Total)
{
let Percentage = (Score / Total)*100
let Div = ""

if (Percentage>=90){
  Div = "1st"
}else if(Percentage>=70){
  Div = "2nd"
}
  else if (Percentage>=55){
  Div = "2rd"
  }
  else {
    Div = "fail"
  }
  return  'you got' + '  ' + Div + '  ' + '('+Percentage+')' +'%'
}
  let result = Calculator(80,100)
  console.log(result);