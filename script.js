function calculateRupiah() {
    const currencySelect = document.getElementById("currency");
    const amountInput = document.getElementById("amount");
    const resultInput = document.getElementById("result");

    const selectedCurrency = currencySelect.value;
    const amount = parseFloat(amountInput.value);

    let exchangeRate;

    switch (selectedCurrency) {
        case "usd":
            exchangeRate = 9915;
            break;
        case "sgd":
            exchangeRate = 13472;
            break;
        case "myr":
            exchangeRate = 874;
            break;
        case "jpy":
            exchangeRate = 120;
            break;
        case "eur":
            exchangeRate = 15888;
            break;
        case "sar":
            exchangeRate = 3592;
            break;
        default:
            exchangeRate = 1;
    }

    const result = amount * exchangeRate;
    resultInput.value = result.toFixed(2);
}
