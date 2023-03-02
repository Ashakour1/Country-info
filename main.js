 let search = document.getElementById("search");
 let country = document.getElementById("country");
 search.addEventListener("click",()=>{
    let countryName = country.value;
    let FinalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(FinalUrl);
    fetch(FinalUrl).then((Response) => Response.json()).then((data) =>{
        result.innerHTML = `<img src = "${data[0].flags.svg}" class = "flag-img">
        <h3>${data[0].name.common}</h3>
        <div class = "Country-dt">
        <div class = "data-Country">
        <h4>Capital:</h4>
        <span>${data[0].capital[0]}</span>
        </div>
        </div>
        <div class = "Country-dt">
        <div class = "data-Country">
        <h4>Continent:</h4>
        <span>${data[0].continents[0]}</span>
        </div>
        </div>
        <div class = "Country-dt">
        <div class = "data-Country">
        <h4>Population:</h4>
        <span>${data[0].population}</span>
        </div>
        </div>
        <div class = "Country-dt">
        <div class = "data-Country">
        <h4>Currency:</h4>
        <span>${data[0].currencies[Object.keys(data[0].currencies)].name}</span>
        </div>
        </div>
        <div class = "Country-dt">
        <div class = "data-Country">
        <h4>Language:</h4>
        <span>${Object.values(data[0].languages).toString().split(",").join(",")}</span>
        </div>
        </div>

    `})
    .catch( ()=>{
        if(countryName.length == 0){
            result.innerHTML = `<h5> The input field cannot be empty </h5>`;
        }
        else{
            result.innerHTML = `<h5> please enter a valid Country Name </h5>`
        }
    });
});
   
