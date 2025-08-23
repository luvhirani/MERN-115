document.getElementById("search-button").addEventListener("click",function(){
    let cityName = document.getElementById("input").value;
    console.log(cityName)
    let weatherData = fetchWeatherData(cityName)
    console.log(weatherData)
    weatherData.then((data)=>{
        console.log(data)
        document.getElementById("city-name").innerHTML = data.name
    })
})

async function fetchWeatherData(cityName){
    try {
        let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=894693f36e8238ad2e5e6ab70160baac&units=metric`)
        const response = data.json();
        return response;
    } catch (error) {
        console.log(error)
    }
}

