const tabs = document.querySelectorAll(".sidebar li");
const tabContents = document.querySelectorAll(".dashboard-tab");

function switchTab(id) {
  tabs.forEach(tab => tab.classList.remove("active"));
  tabContents.forEach(tab => tab.classList.remove("active"));

  document.querySelector(`#${id}`).classList.add("active");
  event.target.classList.add("active");
}

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

document.getElementById('logoutBtn').addEventListener('click', () => {
    // Clear any user session data:
    localStorage.removeItem('user');
    // Optionally clear wallet data:
    // localStorage.removeItem('walletBalance');
    // localStorage.removeItem('transactionHistory');
    // Redirect to login page:
    window.location.href = 'login.html';
  });

  let walletBalance = localStorage.getItem('walletBalance') || 0;
  let transactionHistory = JSON.parse(localStorage.getItem('transactionHistory')) || [];

  document.getElementById('wallet-balance').innerText = parseFloat(walletBalance).toFixed(2);
  updateTransactionList();

  function loadFunds() {
    const amount = parseFloat(prompt('Enter amount to load:'));
    if (!isNaN(amount) && amount > 0) {
      walletBalance = parseFloat(walletBalance) + amount;
      transactionHistory.unshift(`+₦${amount.toFixed(2)} added to wallet`);
      saveWalletState();
    }
  }

  function makePayment() {
    const amount = parseFloat(prompt('Enter amount to pay:'));
    if (!isNaN(amount) && amount > 0 && amount <= walletBalance) {
      walletBalance = parseFloat(walletBalance) - amount;
      transactionHistory.unshift(`-₦${amount.toFixed(2)} paid`);
      saveWalletState();
    } else {
      alert('Insufficient balance or invalid amount');
    }
  }

  function requestWithdraw() {
    const amount = parseFloat(prompt('Enter amount to withdraw:'));
    if (!isNaN(amount) && amount > 0 && amount <= walletBalance) {
      walletBalance = parseFloat(walletBalance) - amount;
      transactionHistory.unshift(`-₦${amount.toFixed(2)} withdrawal requested`);
      saveWalletState();
    } else {
      alert('Insufficient balance or invalid amount');
    }
  }

  function saveWalletState() {
    localStorage.setItem('walletBalance', walletBalance);
    localStorage.setItem('transactionHistory', JSON.stringify(transactionHistory));
    document.getElementById('wallet-balance').innerText = parseFloat(walletBalance).toFixed(2);
    updateTransactionList();
  }

  function updateTransactionList() {
    const list = document.getElementById('transaction-list');
    list.innerHTML = '';
    transactionHistory.slice(0, 5).forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      list.appendChild(li);
    });
  }