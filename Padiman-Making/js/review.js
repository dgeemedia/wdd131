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

    // Check if review count exists, otherwise start at 0
    let reviewCount = localStorage.getItem('reviewCount') || 0;

    // Convert to number and increment
    reviewCount = Number(reviewCount) + 1;
  
    // Store it back
    localStorage.setItem('reviewCount', reviewCount);
  
    // Optional: Display it
    const message = document.createElement('p');
    message.textContent = `You have submitted ${reviewCount} review(s).`;
    msg.style.textAlign = "center";
    msg.style.marginTop = "20px";
    msg.style.color = "#022142";
    document.body.appendChild(message);

  document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;