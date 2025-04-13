// js/auth.js

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    
    if (loginForm) {
      loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        // Basic example: store login details in localStorage
        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;
        
        // In production, this should be a call to your backend API for authentication
        if (email && password) {

        // Set default name if not registered
        let user = JSON.parse(localStorage.getItem("user")) || {};
        user.email = email;
        user.name = user.name || "User";

        localStorage.setItem("user", JSON.stringify({ email }));
        window.location.href = "dashboard.html";
        }
      });
    }
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const registrationForm = document.getElementById("registrationForm");
    const userTypeSelect = document.getElementById("userType");
    const businessFields = document.getElementById("businessFields");
    const servicesField = document.getElementById("servicesField");
  
    const businessFieldIds = [
      "businessRegNumber",
      "taxId",
      "businessCertificate"
    ];
  
    // Toggle fields visibility based on user type
    userTypeSelect.addEventListener("change", () => {
      const userType = userTypeSelect.value;
      const isBusiness = userType === "business";
      const isIndividualOrArtisan = userType === "individual";
  
      // Show/hide servicesOffered for both user types
      servicesField.style.display = isBusiness || isIndividualOrArtisan ? "block" : "none";
      document.getElementById("servicesOffered").required = isBusiness || isIndividualOrArtisan;
  
      // Show/hide business-only fields
      businessFields.style.display = isBusiness ? "block" : "none";
      businessFieldIds.forEach(id => {
        const field = document.getElementById(id);
        if (field) field.required = isBusiness;
      });
    });
  
    // Handle registration submission
    registrationForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const country = document.getElementById("country").value;
      const userType = userTypeSelect.value;
  
      // Disable required validation for hidden fields before submitting
      businessFieldIds.forEach(id => {
        const field = document.getElementById(id);
        if (field && field.offsetParent === null) {
          field.required = false;
        }
      });
  
      // Save user details and redirect
      if (name && email && userType) {
        const user = { 
          name, 
          email,
          phone,
          country, 
          userType 
        };
        localStorage.setItem("user", JSON.stringify(user));
        window.location.href = "dashboard.html";
      }
    });
  });
  
  