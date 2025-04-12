// js/utilities.js

// Basic form validation example
function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  
  // Template literal example
  function createGreeting(name) {
    return `Hello, ${name}! Welcome to MyPadiMan.`;
  }
  