const searchPhone = () => {
  const searchFild = document.getElementById('search-field');
  const searchText = searchFild.value;
//   console.log(searchText);
  const url =`https://openapi.programming-hero.com/api/phones?search=${searchText}`
  fetch(url)
  .then(res => res.json())
  .then(data => displayPhones(data.data));

}

const displayPhones = phones => {
    // console.log(phones);
    const searchResult = document.getElementById('search-result');
    phones.forEach(phone => {
        console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card h-100">
              <img src="" class="card-img-top" alt="">
               <div class="card-body">
                 <h5 class="card-title">Card title</h5>
                 <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
               </div>
            </div>
        `;
        searchResult.appendChild(div);

    })
}