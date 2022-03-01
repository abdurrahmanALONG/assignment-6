const autoQuato = () => {
    fetch('https://api.kanye.rest')
    .then(res => res.json())
    .then(data => getQuote(data));
}

const getQuote = quote => {
    // console.log(quote.quote);
    const getDiv = document.getElementById('list');
    getDiv.innerText = quote.quote;
    // console.log(getDiv.innerText);
    const p = document.createElement('p');
    getDiv.appendChild(p);
}
