
// litecoin-metrics.js
// This code fetches updates about Litecoin and it also 'roughly' calculates the next litecoin halving

const ms = 3000;
var ltcusd = 90.01;
var marketcap = 6.6;
var circulating = 720619370.0;

var result;
function refreshLTCStats() { 

    setTimeout(refreshLTCStats, ms);
		const response = fetch('https://api.coingecko.com/api/v3/coins/litecoin?tickers=false&market_data=true')
		.then(r =>  r.json()
		.then(data => ({status: r.status, body: data})))
		.then(obj => 
     updateValues(obj)
     );
}

function updateValues(market) {
		
      ltcusd = JSON.stringify(market.body.market_data.current_price.usd);
      marketcap = Number((circulating * ltcusd / 1000000000).toFixed(2));
 			circulating = Number(JSON.stringify(market.body.market_data.circulating_supply));
      
      document.getElementById('ltc-usd-price').innerHTML = "$"+ltcusd;
      document.getElementById('marketcap-usd').innerHTML = "$"+marketcap+"B";
      document.getElementById('circulating-supply').innerHTML = circulating.toLocaleString("en-US")+" LTC";
 }
 
setTimeout(refreshLTCStats, ms);

let isMinute = false;
    let halvingdayEl = document.getElementById("textHalvingValue");
	 const countDownDate = new Date("2023-08-03");
    let counts = setInterval(() =>{
       let now = new Date();
       let difference = countDownDate.getTime() - now.getTime();
       if(difference > 0){
          let days = Math.floor(difference / (24 * 3600 * 1000));
          document.getElementById("textHalvingValue").innerText = days;
       }else{
          halvingdayEl.innerText.innerText = "0";
       }
 	 }, 1000);
 
   let now = new Date();
   let twoDaysEarlier = new Date("2023-08-01")
   if(now.getTime() >= twoDaysEarlier.getTime()){
      clearInterval(counts)
      document.getElementById("textHalvingValue").innerText = "0";
   }


  let currentYear = document.getElementById('year');
  currentYear.textContent = new Date().getFullYear(); 