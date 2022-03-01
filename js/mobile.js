// -------------------Search button start----------------------------
const searchPhone = () => {
  const searchFild = document.getElementById('search-field');
  const searchText = searchFild.value;
// --------  clear search result and check searchText--------
  searchFild.value ='';


// ---------------data loding-----------------------
  const url =`https://openapi.programming-hero.com/api/phones?search=${searchText}`
  fetch(url)
  .then(res => res.json())
  .then(data => displayPhones(data.data));
}



// ---------------Search data display--------------------
const displayPhones = phones => {
    const searchResult = document.getElementById('search-result');
    searchResult.innerHTML = '';
    phones.forEach(phone => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div  class="card h-50">
              <img src="${phone.image}" class="card-img-top" alt="">
               <div class="card-body">
                 <h4 class="card-title">${phone.phone_name}</h4>
                 <h5 class="card-title">${phone.brand}</h5>
               </div>
               <button onclick="searchDitails('${phone.slug}')" class=" w-25 mx-auto">deatils</button>
            </div>
        `;
        searchResult.appendChild(div);

    })
}
// -------------------Search button End----------------------------









// -------------------details button start----------------------------
const searchDitails = details => {
    searchDitails.value
// ---------------------------details button load------------------
    const url =`https://openapi.programming-hero.com/api/phone/${details}`
    fetch(url)
    .then(res => res.json())
    .then(data =>  displayDetails(data.data));
}

// ---------------Details data display--------------------
const displayDetails = phoneDetails => {
    const detailsResult = document.getElementById('details-button');
    detailsResult.innerHTML = '';
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
        <div class="card h-50 mx-auto">
            <img src="${phoneDetails.image}" class="card-img-top" alt="">
            <div class="card-body">
            <h5 class="card-title">${phoneDetails.brand}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
       </div>
     </div>
        `;
        detailsResult.appendChild(div);
}


// -------------------Details button End---------------------------