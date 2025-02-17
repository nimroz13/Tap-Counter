// Increment Button
window.onload = function()
{
  let count=localStorage.getItem("count");
  if(!count)
  {
    count=0;
    localStorage.setItem('count',count);
  }
  updateDisplay();
}
// let count;
// if(localStorage.getItem("count").isNaN)
// {
  
//   count=0;
//   localStorage.setItem('count', 0);
// }

const updateDisplay = () => {
  const count=localStorage.getItem("count");
  document.getElementById("display").innerText = count;
};

document.getElementById("incbtn").onclick = () => {
  let count=localStorage.getItem("count");
  count++;
  localStorage.setItem('count', count);
  updateDisplay();
};

// Decrement Button
document.getElementById("decbtn").onclick = () => {
  let count=localStorage.getItem("count");
  if (count > 0) {
    count--;
    localStorage.setItem('count', count);
    updateDisplay();
  }
};

// Reset Button
document.getElementById("reset").onclick = () => {
  count = 0;
  localStorage.setItem('count', 0);
  updateDisplay();
};

// Dropdown Navigation
document.getElementById("optionss").addEventListener("change", function () {
  const selectedValue = this.value;
  if (selectedValue === "home") {
    window.location.href = "index.html";
  } else if (selectedValue === "about") {
    window.location.href = "about.html";
  } else if (selectedValue === "contact") {
    window.location.href = "contactus.html";
  }
});

// Set Button
document.getElementById("set").onclick = () => {
  const inputBox = document.getElementById("textbox");
  const newValue = parseInt(inputBox.value, 10);
  console.log(newValue, typeof (newValue));
  // Get the value from the input box and convert it to a number
  if (!isNaN(newValue)) {
    count = newValue; // Update the count variable with the new value
    localStorage.setItem('count', count);
    updateDisplay(); // Update the display to show the new count
    inputBox.value = null; // Reset the input box to 0
  } else {
    console.error("Invalid input. Please enter a valid number.");
  }
};

// Dark Mode Toggle Button
const togglebtn = document.getElementById("togglebtn");

const applyTheme = () => {
  // Check if dark mode was previously set in localStorage
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add("dark-mode");
    togglebtn.textContent = "Light";
  } else {
    document.body.classList.remove("dark-mode");
    togglebtn.textContent = "Dark";
  }
};

togglebtn.onclick = () => {
  // Toggle the dark mode
  const isDarkMode = document.body.classList.toggle("dark-mode");
  
  // Save the preference in localStorage
  localStorage.setItem('darkMode', isDarkMode);
  
  // Update the button text based on the theme
  togglebtn.textContent = isDarkMode ? "Light" : "Dark";
};

// Apply the theme on page load
applyTheme();
