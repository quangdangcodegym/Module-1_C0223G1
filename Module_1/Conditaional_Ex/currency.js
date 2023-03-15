function handleConvertClick(){
    let currency = +document.getElementById("txtCurrency").value;
    let currency1 = Number(document.getElementById("txtCurrency").value)

    let fromCurrency = document.getElementById("sFromCurrency").value;
    let toCurrency = document.getElementById("sToCurrency").value;

    console.log(`curreny: ${currency} , fromCurrency: ${fromCurrency}, toCurrency: ${toCurrency}`);




    let result;
    if(fromCurrency == 'USD' && toCurrency == "USD" || fromCurrency == 'VND' && toCurrency == "VND"){
        result = currency;
    }else{
        if(fromCurrency == 'USD' && toCurrency == "VND"){
            result = currency*230000;
        }else{
            if(fromCurrency == 'VND' && toCurrency == "USD"){
                result = currency / 230000;
            }
        }
    }
    document.getElementById("lbResult").innerText = result.toFixed(3);

}