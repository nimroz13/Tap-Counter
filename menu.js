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
  
  // Preserve Dropdown Selection on Page Load
  window.onload = () => {
    const currentPath = window.location.pathname;
    const dropdown = document.getElementById("optionss");
    if (currentPath.includes("about.html")) {
      dropdown.value = "about";
    } else if (currentPath.includes("contactus.html")) {
      dropdown.value = "contact";
    } else {
      dropdown.value = "home";
    }
  };
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

  document.getElementById("theme").addEventListener("change", function () {
    const selectedValue = this.value;
    if (selectedValue === "Light") {
      window.location.href = "about.html";
    } else if (selectedValue === "Dark") {
      window.location.href = "dark2.html";
    } 
  });