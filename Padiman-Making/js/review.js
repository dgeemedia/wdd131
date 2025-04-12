// Populate Service Dropdown
const services = [
    { id: "john-electrician", name: "John the Electrician" },
    { id: "lagos-runner", name: "Lagos Express Runner" },
    { id: "quickfix-plumber", name: "QuickFix Plumber" },
    { id: "mama-tees", name: "Mama Tee’s Grocery" },
    { id: "fast-boda", name: "Fast Boda Delivery" }
  ];
  
  const select = document.getElementById("product");
  
  if (select) {
    services.forEach(service => {
      const option = document.createElement("option");
      option.value = service.id;
      option.textContent = service.name;
      select.appendChild(option);
    });
  }

  document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;