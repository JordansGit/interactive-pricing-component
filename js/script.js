var slider = document.getElementById("slider");
var output = document.getElementById("cost");
output.innerHTML = slider.value; // Display the default slider value

/* make slider value display 16.00 by default */ 
window.onload = function() {
  slider.value = "16";
  cost.innerText = "16.00";
}

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  var x = Number(this.value).toFixed(2);
  output.innerHTML = x;
}


/* learning notes: 
oninput = gets the slider input, also each time the slider moves, the input value changes.  
this.value gets the value of oninput at its current location. 


*/