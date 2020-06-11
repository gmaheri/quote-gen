
const getCatFact = () => {
  fetch("https://api.quotable.io/random")
  .then((res) => {
    return res.json();
  })
  .then(data => {
    document.getElementById('newQuoteSection').innerHTML = data.content;
    document.getElementById('author').innerHTML = data.author
  })
  .catch(err => console.error(err))
}
