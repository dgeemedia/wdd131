// js/formHandler.js

document.addEventListener("DOMContentLoaded", () => {
    const userTypeSelect = document.getElementById("userType");
    const artisanFields = document.getElementById("artisanFields");
    const businessFields = document.getElementById("businessFields");
  
    function updateRegistrationFields() {
      const selectedType = userTypeSelect.value;
      artisanFields.classList.add("hidden");
      businessFields.classList.add("hidden");
      if (selectedType === "artisan") {
        artisanFields.classList.remove("hidden");
      } else if (selectedType === "business") {
        businessFields.classList.remove("hidden");
      }
    }
  
    userTypeSelect.addEventListener("change", updateRegistrationFields);
    updateRegistrationFields(); // Initialize on page load
  });
  