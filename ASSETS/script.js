// JavaScript
function showInfo(merienda) {
    
  }

  function toggleFlip(card) {
    card.classList.toggle('flip');
  }  
  

function showInfo() {
    // Get customer information
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const contact = document.getElementById('contact').value;

    // Get order details
    const kikiamQty = parseInt(document.getElementById('kikiam').value);
    const fishballQty = parseInt(document.getElementById('fishball').value);
    const kwekKwekQty = parseInt(document.getElementById('kwek-kwek').value);
    const calamaresQty = parseInt(document.getElementById('calamares').value);

    // Prices for each item
    const kikiamPrice = 3;
    const fishballPrice = 2;
    const kwekKwekPrice = 4;
    const calamaresPrice = 5;

    // Calculate total based on item prices and quantities
    const total = kikiamQty * kikiamPrice +
                  fishballQty * fishballPrice +
                  kwekKwekQty * kwekKwekPrice +
                  calamaresQty * calamaresPrice;

    // Display customer information and receipt
    const summary = `Customer Information:
    Name: ${name}
    Address: ${address}
    Contact Number: ${contact}
    
    Receipt:
    Kikiam x ${kikiamQty}: ${kikiamQty * kikiamPrice} PHP
    Fishball x ${fishballQty}: ${fishballQty * fishballPrice} PHP
    Kwek-Kwek x ${kwekKwekQty}: ${kwekKwekQty * kwekKwekPrice} PHP
    Calamares x ${calamaresQty}: ${calamaresQty * calamaresPrice} PHP
    Total: ${total} PHP`;

    alert(summary);
}

function showInfo() {
    // Get customer information
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const contact = document.getElementById('contact').value;

    // Get order details
    const kikiamQty = parseInt(document.getElementById('kikiam').value);
    const fishballQty = parseInt(document.getElementById('fishball').value);
    const kwekKwekQty = parseInt(document.getElementById('kwek-kwek').value);
    const calamaresQty = parseInt(document.getElementById('calamares').value);

    // Prices for each item
    const kikiamPrice = 3;
    const fishballPrice = 2;
    const kwekKwekPrice = 4;
    const calamaresPrice = 5;

    // Calculate total based on item prices and quantities
    const total = kikiamQty * kikiamPrice +
                  fishballQty * fishballPrice +
                  kwekKwekQty * kwekKwekPrice +
                  calamaresQty * calamaresPrice;

    // Display customer information and receipt
    const summary = `Customer Information:
    Name: ${name}
    Address: ${address}
    Contact Number: ${contact}
    
    Order Details:
    Kikiam x ${kikiamQty}: ${kikiamQty * kikiamPrice} PHP
    Fishball x ${fishballQty}: ${fishballQty * fishballPrice} PHP
    Kwek-Kwek x ${kwekKwekQty}: ${kwekKwekQty * kwekKwekPrice} PHP
    Calamares x ${calamaresQty}: ${calamaresQty * calamaresPrice} PHP
    Total: ${total} PHP`;

    alert(summary);
}

document.getElementById('infoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    showInfo();
});



  document.getElementById('orderForm').addEventListener('input', function() {
    // Calculate total bill
    let total = 0;
    const kikiamQty = parseInt(document.getElementById('kikiam').value);
    const fishballQty = parseInt(document.getElementById('fishball').value);
    const kwekKwekQty = parseInt(document.getElementById('kwek-kwek').value);
    const calamaresQty = parseInt(document.getElementById('calamares').value);
    
    // Prices for each item
    const kikiamPrice = 3;
    const fishballPrice = 2;
    const kwekKwekPrice = 4;
    const calamaresPrice = 5;
  
    // Calculate total based on item prices and quantities
    total += kikiamQty * kikiamPrice;
    total += fishballQty * fishballPrice;
    total += kwekKwekQty * kwekKwekPrice;
    total += calamaresQty * calamaresPrice;
  
    // Update total variable accordingly
    document.getElementById('total').textContent = total + " PHP";
  });
  
  // Attach event listeners to quantity inputs
  const quantityInputs = document.querySelectorAll('#kikiam, #fishball, #kwek-kwek, #calamares');
  quantityInputs.forEach(function(input) {
    input.addEventListener('input', function() {
      document.getElementById('orderForm').dispatchEvent(new Event('input'));
    });
  });
  
  document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get payment amount
    const paymentAmount = parseFloat(document.getElementById('payment').value);
  
    // Calculate total bill (to ensure it's up to date)
    let total = 0;
    const kikiamQty = parseInt(document.getElementById('kikiam').value);
    const fishballQty = parseInt(document.getElementById('fishball').value);
    const kwekKwekQty = parseInt(document.getElementById('kwek-kwek').value);
    const calamaresQty = parseInt(document.getElementById('calamares').value);
    
    // Prices for each item
    const kikiamPrice = 3;
    const fishballPrice = 2;
    const kwekKwekPrice = 4;
    const calamaresPrice = 5;
  
    // Calculate total based on item prices and quantities
    total += kikiamQty * kikiamPrice;
    total += fishballQty * fishballPrice;
    total += kwekKwekQty * kwekKwekPrice;
    total += calamaresQty * calamaresPrice;
  
    // Display receipt
    const receipt = `Receipt:
    Kikiam x ${kikiamQty}: ${kikiamQty * kikiamPrice} PHP
    Fishball x ${fishballQty}: ${fishballQty * fishballPrice} PHP
    Kwek-Kwek x ${kwekKwekQty}: ${kwekKwekQty * kwekKwekPrice} PHP
    Calamares x ${calamaresQty}: ${calamaresQty * calamaresPrice} PHP
    Total: ${total} PHP
    Payment: ${paymentAmount} PHP
    Change: ${paymentAmount - total} PHP`;
  
    alert(receipt);
  });
  
  
  