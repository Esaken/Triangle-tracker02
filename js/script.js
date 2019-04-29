function myFunction(){
   var inputs = document.getElementsByClassName("triangle-value");
   var Side1=parseInt(inputs[0].value);
   var Side2=parseInt(inputs[1].value);
   var Side3=parseInt(inputs[2].value);

if(Side2 + Side1<=Side3 && Side3 + Side1<=Side2 && Side3 + Side2<=Side1){
document.getElementById('result').innerHTML = "DOESNT QUALIFY TO BE A TRIANGLE";
}
if(Side1<=0 && Side2<=0 &&  Side3<=0){
      document.getElementById("result").innerText = "NOT A TRIANGLE";
  }
else if(Side1===Side2 && Side1===Side3 && Side3 ===Side2){
document.getElementById('result').innerHTML = "THIS IS AN EQUILATERAL TRIANGLE";
}
else if(Side2===Side1 || Side2===Side3 || Side3===Side1){
  document.getElementById('result').innerHTML = "THIS IS AN ISOSCELES TRIANGLE";
}
else if(Side2 + Side1>Side3 || Side3 + Side1>Side2 || Side3 + Side2>Side1){
document.getElementById('result').innerHTML = "THIS IS A SCALENE TRIANGLE";
}
}
