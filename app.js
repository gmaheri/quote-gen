var quotes = [
  "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver. - Any Rand",
  "Not he who has much is rich, but he who gives much. - Erich Fromm",
  "Time is more valuable than money. You can get more money, but you cannot get more time. - Jim Rohn",
  "If you would be wealthy, think of saving as well as getting. - Ben Franklin"
];
const getQuote = () => {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById('newQuoteSection').innerHTML = quotes[randomNumber];
}
