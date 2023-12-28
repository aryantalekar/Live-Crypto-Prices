const accessKey = "76614ca32f0a7998f0beeee6a348ebc5";
const url = `http://api.coinlayer.com/live?access_key=${accessKey}`;
const btcPrice = document.querySelector('#btcPrice');
const ethPrice = document.querySelector('#ethPrice');
const dogePrice = document.querySelector('#dogePrice');
const usdtPrice = document.querySelector('#usdtPrice');

async function api() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    const btcPriceValue = parseFloat(data.rates.BTC).toFixed(2);
    const ethPriceValue = parseFloat(data.rates.ETH).toFixed(2);
    const dogePriceValue = parseFloat(data.rates.DOGE).toFixed(2);
    const usdtPriceValue = parseFloat(data.rates.USDT).toFixed(2);

    btcPrice.textContent = `$${btcPriceValue}`;
    ethPrice.textContent = `${ethPriceValue}`;
    dogePrice.textContent = `$${dogePriceValue}`;
    usdtPrice.textContent = `$${usdtPriceValue}`;

  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

api();
