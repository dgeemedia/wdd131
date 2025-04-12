// js/storage.js

function saveToLocal(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  
  function getFromLocal(key) {
    return JSON.parse(localStorage.getItem(key));
  }
  
  // Example usage:
  // saveToLocal('user', {name: 'John Doe'});
  // const user = getFromLocal('user');
  