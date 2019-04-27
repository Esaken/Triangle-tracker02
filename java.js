document.getElementById("submit").onclick = myFunction();

function myFunction(){
  

  var Side1 = parseInt(document.getElementById("Side1").value);
  var Side2 = parseInt(document.getElementById("Side2").value);
  var Side3 = parseInt(document.getElementById("Side3").value);
  };
  ife(Side1>=Side2+Side3 || Side2>=Side3+Side1 || Side3>=Side2+Side1) {

    document.getElementById('submit').innerHTML ='Not a triangle';

  };
   else (Side1===Side2 && Side2===Side3) {
    document.getElementById('submit').innerHTML ='Equilateral triangle'
    };

};
