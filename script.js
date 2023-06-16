document.getElementById("transaction-form").addEventListener("submit", function (event) {
    event.preventDefault();
  
    var transactionType = document.getElementById("transaction-type").value;
    var amount = parseFloat(document.getElementById("amount").value);
    var initialBalanceOrig = parseFloat(document.getElementById("initial-balance-orig").value);
    var initialBalanceDest = parseFloat(document.getElementById("initial-balance-dest").value);
  
    var finalBalanceOrig = initialBalanceOrig - amount;
    var finalBalanceDest = initialBalanceDest + amount;
  
    document.getElementById("final-balance-orig").value = finalBalanceOrig.toFixed(2);
    document.getElementById("final-balance-dest").value = finalBalanceDest.toFixed(2);
  
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
  
    if (finalBalanceOrig >= 0 && finalBalanceDest >= 0) {
      resultDiv.innerHTML = "APROBADO";
      resultDiv.className = "aprobado";
    } else {
      resultDiv.innerHTML = "FRAUDE";
      resultDiv.className = "fraude";
    }
  });
  