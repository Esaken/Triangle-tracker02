function submit() {
var Side1 = parseInt(documents.getElementById("Side1").value);
var Side2 = parseInt(documents.getElementById("Side2").value);
var Side3 = parseInt(documents.getElementById("Side3").value);
if (Side1 + Side2 <= Side3 || Side1 + Side3 <= Side2 || Side2 + Side3 <= Side1){
text = document.getElementById('result').innerHTML = "This is not a triangle!";
}
else if (Side1 === Side2 && Side1 === Side3 && Side2 === Side3){
text = document.getElementById('result').innerHTML = "This is an equilateral triangle";
}
else if (Side1 === Side2 || Side1 === Side3 || Side2 === Side3){
text = document.getElementById('result').innerHTML = "This is an isosceles triangle";
}
else if (Side1**2 + Side2**2 === Side3**2){
text = document.getElementById('result').innerHTML = "This is a right-angled triangle.";
}
else if (Side1**2 + Side3**2 === Side2**2){
text = document.getElementById('result').innerHTML = "This is a right-angled triangle.";
}
else {
text = document.getElementById('result').innerHTML = "This is a scalene triangle." ;
      }
