let button = document.querySelector('button');
let prices = document.querySelectorAll('.price');
let totalPrice = document.querySelector('.totalprice');

let totalPriceValue = 0;

for (let i = 0; i < prices.length; i++) {
  let currentSum = prices[i];
  totalPriceValue += (+(currentSum.innerHTML));
}

totalPrice.innerHTML = totalPriceValue;

button.addEventListener('click', function () {
    let newTotalPriceValue = 0;
    for (let i = 0; i < prices.length; i++) {
        let Newprice = prices[i];
        let newPriceValue = Newprice.innerHTML * 0.8;
        prices[i].innerHTML = newPriceValue;
        
        newTotalPriceValue += newPriceValue;
    }
    totalPrice.innerHTML = newTotalPriceValue;
}, {once : true});
