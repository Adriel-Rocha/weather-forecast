

const key = "4d27bcad02daf8dab91104c47dab06db"

async function searchCity(city) {
    const dates = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`).then(response => response.json())
    console.log(dates)
}

function clickSearch() {
    const city = document.querySelector(".inputCity").value
    searchCity(city)
}