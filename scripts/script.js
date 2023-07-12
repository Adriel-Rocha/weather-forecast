

const key = "4d27bcad02daf8dab91104c47dab06db"
const listCity = ['New York', 'California', 'Brasília', 'São Paulo', 'New Jersey', 'Tokio', 'Toronto', 'Vancouver', 'Montreal', 'Moscou', 'São Petersburgo', 'Cancún', 'Buenos Aires', 'Lisboa', 'Porto', 'Coimbra', 'Aveiro']
const cityRandom = listCity[Math.floor(Math.random() * listCity.length)]



function clickSearch() {
    const city = document.querySelector(".inputCity").value
    searchCity(city)
}


async function searchCity(city) {
    const dates = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`).then(response => response.json())
    showResult(dates)
}


function showResult(dates) {
    document.querySelector('.city').innerHTML = 'weather in ' + dates.name
    document.querySelector('.temp').innerHTML = Math.floor(dates.main.temp) + '°F'
    document.querySelector('.imgPreview').src = `https://openweathermap.org/img/wn/${dates.weather[0].icon}.png`
    document.querySelector('.textPreview').innerHTML = dates.weather[0].description
    document.querySelector('.humidity').innerHTML = dates.main.humidity + '%'
}


window.onload =  function openPage() {
    searchCity(cityRandom)
}