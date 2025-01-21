// Increment Button
let count = 0;
const updateDisplay = () => {
  document.getElementById("display").innerText = count;
};

document.getElementById("incbtn").onclick = () => {
  count++;
  updateDisplay();
};

// Decrement Button
document.getElementById("decbtn").onclick = () => {
  if (count > 0) {
    count--;
    updateDisplay();
  }
};

// Reset Button
document.getElementById("reset").onclick = () => {
  count = 0;
  updateDisplay();
};

// Dropdown Navigation
document.getElementById("optionss").addEventListener("change", function () {
  const selectedValue = this.value;
  if (selectedValue === "home") {
    window.location.href = "tapcounter.html";
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
