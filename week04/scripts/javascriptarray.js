const courses = [
    "CSE 110",
    "CSE 111",
    "WDD 130",
    "WDD 131",
    "WDD 231",
    "CSE 210"
  ];
  
  // 1️⃣ map() courses to subject list
  
  // *************************************************************************************
  const countries = [
    "Uganda",
    "United States",
    "Uruguay",
    "Brazil",
    "Canada",
    "Germany",
    "Japan",
    "Mexico",
    "Spain",
    "Turkey"
  ];
  
  // 2️⃣ filter() countries to those starting with "U"
  
  // *************************************************************************************
  const fruits = [
    { 
        name: "apple", 
        price: 1 
    },

    { 
        name: "banana", 
        price: 0.5 
    },

    { 
        name: "orange", 
        price: 1.2 
    },

    { 
        name: "grape", 
        price: 0.1 
    }
  ];
  
  // 3️⃣ reduce() array of objects to total cost.
  
  // *************************************************************************************
  const students = [
    { 
        fullName: "Alice Johnson", 
        state: "California, USA", 
        class: "Mathematics" 

    },

    {
      fullName: "Benjamin Lee",
      state: "Ontario, Canada",
      class: "Computer Science"
    },

    { 
        fullName: "Chloe Smith", 
        state: "London, UK", 
        class: "Physics" 
    },

    { 
        fullName: "David Kim", 
        state: "Seoul, South Korea", 
        class: "Engineering" 
    },

    { 
        fullName: "Elena Rodriguez", 
        state: "Madrid, Spain", 
        class: "Biology" 
    },

    { 
        fullName: "Felix Müller", 
        state: "Berlin, Germany", 
        class: "History" 
    }
  ];
  // 4️⃣ loop through the array
  
  // *************************************************************************************
  const products = [
    {
      name: "Widget A",
      partNumber: "WA-123",
      quantity: 50,
      price: 12.5
    },
    {
      name: "Gear B",
      partNumber: "GB-456",
      quantity: 100,
      price: 3.75
    },
    {
      name: "Lever C",
      partNumber: "LC-789",
      quantity: 25,
      price: 25.0
    },
    {
      name: "Bolt D",
      partNumber: "BD-012",
      quantity: 200,
      price: 0.5
    },
    {
      name: "Panel E",
      partNumber: "PE-345",
      quantity: 10,
      price: 50.0
    },
    {
      name: "Wire F",
      partNumber: "WF-678",
      quantity: 150,
      price: 1.25
    },
    {
      name: "Tube G",
      partNumber: "TG-901",
      quantity: 30,
      price: 18.0
    }
  ];
  // 5️⃣ find first 'expensive' product
  
  // *************************************************************************************
  // 6️⃣ determine if Canada is contained within the array countries (see line 18)
  