// -------------------Search button start----------------------------
const searchPhone = () => {
  const searchFild = document.getElementById('search-field');
  const searchText = searchFild.value;
// --------  clear search result and check searchText--------
searchFild.value ='';
  if( searchText== '' ){
    const error1 = document.getElementById('error-handeler-1');
    error1.style.display = 'block';
  }
  else if(searchText!= 'huawei' && searchText!= 'oppo' && searchText!= 'samsung' && searchText!= 'iphone'){
    const error2 = document.getElementById('error-handeler-2');
    error2.style.display = 'block';
  }
  else{
    // ---------------------------search result load from API------------------
    const url =`https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhones(data.data));
  }
}

// ---------------Search data display oparetion--------------------
const displayPhones = phones => {
    const searchResult = document.getElementById('search-result');
    searchResult.innerHTML = '';
    phones.slice(0,20).forEach(phone => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div  class="card h-50">
              <img src="${phone.image}" class="card-img-top" alt="">
               <div class="card-body">
                 <h4 class="card-title">${phone.phone_name}</h4>
                 <h5 class="card-title">${phone.brand}</h5>
               </div>
               <button onclick="searchDitails('${phone.slug}')" class="bg-primary text-white w-25 mx-auto">Details</button>
            </div>
        `;
        searchResult.appendChild(div);   
    })
}
// -------------------Search button End----------------------------









// -------------------details button start----------------------------
const searchDitails = details => {
    searchDitails.value
// ---------------------------details button load from API------------------
    const url =`https://openapi.programming-hero.com/api/phone/${details}`
    fetch(url)
    .then(res => res.json())
    .then(data =>  displayDetails(data.data));
}
// ---------------Details data display--------------------
const displayDetails = phoneDetails => {
    const detailsResult = document.getElementById('details-button');
    detailsResult.innerHTML = '';
    // loop for sensor
    const sensorData = phoneDetails.mainFeatures.sensors;
    const sensors =[];
    for(const sensor of sensorData){
     sensors.push(sensor);
    }
// loop for others
const values = phoneDetails.others;
const others = [];
for (const [key, value] of Object.entries(values)) {
  others.push(`${key}: ${value}`);
}
// creat div for Details
       const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
        <div class="card h-50 mx-auto">
            <img src="${phoneDetails.image}" class="card-img-top" alt="">
            <div class="card-body">
            <h4 class="card-title">${phoneDetails.brand}</h4>
            <h5 class="card-title">${phoneDetails.name}</h5>
            <h5 class="card-title">${phoneDetails.releaseDate? phoneDetails.releaseDate:'No release Date found'}</h5>
            <p class="card-text"><span class="fw-bold">Features:</span> ${phoneDetails.mainFeatures.chipSet} , ${phoneDetails.mainFeatures.displaySize} , ${phoneDetails.mainFeatures.memory} .</p>
            <p class="card-text"><span class="fw-bold">Sensor:</span> ${sensors} .</p>
            <p class="card-text"><span class="fw-bold">Others:</span> ${others} .</p>
            <a href="#" class="btn btn-primary">More Details</a>
       </div>
     </div>
        `;
        detailsResult.appendChild(div);
}
// -------------------Details button End---------------------------