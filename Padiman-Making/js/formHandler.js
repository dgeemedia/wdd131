// js/formHandler.js

document.addEventListener("DOMContentLoaded", () => {
  const userTypeSelect = document.getElementById("userType");
  const artisanFields = document.getElementById("artisanFields");
  const businessFields = document.getElementById("businessFields");

  // Show/hide fields based on user type
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
  updateRegistrationFields();

  // Handle form submission like login.js
  const form = document.getElementById("registrationForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Form Submitted");

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    // Store name + email in localStorage
    if (name && email) {
      const user = {
        name: name,
        email: email
      };

      localStorage.setItem("user", JSON.stringify(user));

      // ✅ Redirect to dashboard
      window.location.href = "dashboard.html";
    }
  });
});
