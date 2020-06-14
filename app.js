window.onload = () => {
  getQuote();
};

const api = "https://api.quotable.io/random";

const getQuote = () => {
  fetch(api)
  .then((res) => {
    return res.json();
  })
  .then(data => {
    document.getElementById('output').innerHTML = data.content;
    document.getElementById('author').innerHTML = '- ' +  data.author
  })
  .catch(err => console.error(err))
}
