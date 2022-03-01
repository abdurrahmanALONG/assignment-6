const autoQuato = () => {
    // fetch('https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089')
    // .then(res => res.json())
    // .then(data => getQuote(data));
}

// const getQuote = quote => {
//     // console.log(quote.quote);
//     const getDiv = document.getElementById('list');
//     getDiv.innerText = quote.quote;
//     // console.log(getDiv.innerText);
//     const p = document.createElement('p');
//     getDiv.appendChild(p);
// }

fetch('https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089')
    .then(res => res.json())
    .then(data => console.log(data));
