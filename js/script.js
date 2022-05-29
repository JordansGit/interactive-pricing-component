var slider = document.getElementById("slider");
var output = document.getElementById("cost");

/* make slider value display 16.00 by default */ 
window.onload = function() {
  slider.value = "16";
  cost.innerText = "16.00";
}

// Update the current slider value + change slider bar bg (each time you drag the slider handle)
slider.oninput = function() {

  // get the percent at where the slider thumb is. 
  var pcValue = (this.value - this.min) / (this.max - this.min) * 100; 
  // change the linear gradient bg of .slider based on the % value (aka based on where the slider is); 
  this.style.background = 'linear-gradient(to right, hsl(174, 77%, 80%) ' + pcValue + '%, hsl(224, 65%, 95%) ' + pcValue + '%, hsl(224, 65%, 95%) 100%)'
  
  // get the current .slider.value to 2dp and display it. 
  var x = Number(this.value).toFixed(2);
  output.innerHTML = x;
}




/* learning notes: 
oninput = gets the slider input, also each time the slider moves, the input value changes.  
this.value gets the value of oninput at its current location. 

if i set slider min value to 0, I could just do this.value / this.max * 100 to get the % value of how full the bar is. but I set the min value to 1, I need to use this.min for the equation to work

*/