// Show car feature information
function showFeature(feature) {
    let info = '';
    if (feature === 'headlights') {
      info = 'The LED headlights offer superior brightness and a sleek modern design, enhancing visibility and style.';
    } else if (feature === 'logo') {
      info = 'The iconic Mercedes-Benz logo stands for luxury, performance, and advanced engineering.';
    } else if (feature === 'steering') {
      info = 'The steering wheel is ergonomically designed with multi-functional controls for enhanced driving convenience.';
    } else if (feature === 'wheels') {
      info = 'The 20-inch alloy wheels offer a perfect blend of performance and visual appeal, ensuring a smooth ride.';
    }
  
    document.getElementById('feature-info').innerHTML = `<strong>Feature:</strong> ${info}`;
  }
  
  // Finance Calculator Logic
  document.getElementById('financeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const price = parseFloat(document.getElementById('price').value);
    const deposit = parseFloat(document.getElementById('deposit').value) || 0;
    const interest = parseFloat(document.getElementById('interest').value) || 10;
    const term = parseInt(document.getElementById('term').value) || 60;
  
    if (!price || isNaN(price)) {
      alert('Please enter a valid price.');
      return;
    }
  
    const loanAmount = price - deposit;
    const monthlyInterestRate = interest / 100 / 12;
    const numberOfPayments = term;
    const monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    const totalCost = monthlyPayment * numberOfPayments;
  
    const resultText = `Estimated Monthly Payment: R${monthlyPayment.toFixed(2)}<br>Total Cost: R${totalCost.toFixed(2)}`;
    document.getElementById('result').innerHTML = resultText;
  });
  