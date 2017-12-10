
var circle = {
  r: 1,
  getCirc: function() {
     return ( Math.PI * (this.r * 2));
  },
  getArea: function() {
     return (Math.PI * (this.r * this.r));
  },

  getVolume: function() {
   return ((4/3) * (Math.PI * (this.r * this.r * this.r)));
  }

};

document.getElementById("getCirc") ="Enter a value for the circle";

getCirc.addEventListener("click", circleWorks());


function circleWorks() {
if(userEnter > 0) {
r = userEnter;
document.getElementById("results").innerHTML= "Circumference: " + getCirc() + "<br" + "Area: " + getArea() + "<br>" + "Volume: " + getVolume();

} else if (isNaN(this.r)) {
document.getElementById("results").innerHTML= "Please enter a real number";

} else if (userEnter < 0){
document.getElementById("results").innerHTML ="Please enter a number greater than zero.";
}

};