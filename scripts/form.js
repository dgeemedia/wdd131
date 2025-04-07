const products = [
    { id: "fc-1888", name: "John the Electrician", averagerating: 4.5 },
    { id: "fc-2050", name: "Lagos Express Runner", averagerating: 4.7 },
    { id: "fs-1987", name: "QuickFix Plumber", averagerating: 3.5 },
    { id: "ac-2000", name: "Mama Tee’s Grocery", averagerating: 3.9 },
    { id: "jj-1969", name: "Fast Boda Delivery", averagerating: 5.0 }
  ];
  
  const select = document.getElementById("product");
  
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
  });

  document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;
  