document.getElementById("submit").onclick = function() {myFunction()};
function myFunction(){

  var Side1 = parseInt(document.getElementById("Side1").value);
  var Side2 = parseInt(document.getElementById("Side2").value);
  var Side3 = parseInt(document.getElementById("Side3").value);
  };
  if(Side1>=Side2+Side3 || Side2>=Side3+Side1 || Side3>=Side2+Side1) {
    document.getElementById('click').innerHTML ='Not a triangle';

  };
   else if (Side1===Side2 && Side2===Side3) {
    document.getElementById('click').innerHTML ='Equilateral triangle';
}
