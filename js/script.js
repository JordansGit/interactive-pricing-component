var slider = document.getElementById("slider");
var output = document.getElementById("cost");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  // if this.value is not to 2 decimal places, this.value = this.value + ".00" 
  output.innerHTML = this.value;
}


