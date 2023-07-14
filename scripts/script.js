

const key = "4d27bcad02daf8dab91104c47dab06db"
const listCity = ['New York', 'California', 'Brasília', 'São Paulo', 'New Jersey', 'Tokio', 'Toronto', 'Vancouver', 'Montreal', 'Moscou', 'São Petersburgo', 'Cancún', 'Buenos Aires', 'Lisboa', 'Porto', 'Coimbra', 'Aveiro']
const cityRandom = listCity[Math.floor(Math.random() * listCity.length)]
const googleApiKey = "AIzaSyDUdznwW-wynsFrxiF7mKlvCFHaWYwW9E0"
const searchEngineId = "f1ad8c9fbb70f4923"



function clickSearch() {
    const city = document.querySelector(".inputCity").value
    searchCity(city)
    searchImageCity(city)
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
    document.querySelector('.humidity').innerHTML = 'Humidity: ' + dates.main.humidity + '%'
    document.querySelector('.inputCity').value = ''
}


window.onload =  function openPage() {
    searchCity(cityRandom)
    searchImageCity(cityRandom)
}









async function searchImageCity(city) {
    const dates = await fetch(`https://www.googleapis.com/customsearch/v1?key=${googleApiKey}&cx=${searchEngineId}&searchType=image&imgSize=large&num=1&q=imagem da cidade de ${city}`).then(response => response.json())
    const imgBackground = dates.items[0].link
    changTheBackgraund(imgBackground)

}
    
function changTheBackgraund(imgBackground) {
    document.body.style.backgroundImage = `url(${imgBackground})`
}





// async function getImage(cityName) {
//     const datesOnSearch = await fetch(`https://www.googleapis.com/customsearch/v1?key=${googleApiKey}&cx=${searchEngineId}&searchType=image&imgSize=xlarge&num=1&q=imagem da cidade de ${cityName}`).then(response => response.json())
//     const linkImg = datesOnSearch.items[0].link
//     backGroundImg(linkImg)
// }

// function backGroundImg(imgLink) {
//     document.body.style.backgroundImage = `url(${imgLink})`
//     console.log(document.body.style.backgroundImage)
// }
