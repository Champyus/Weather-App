const API_KEY = `50391bdac6d2fe9d0e7aadbbe5f8aa07`
const searchTemperature = ()=>{
    const city = document.getElementById("city-name").value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))
    
}
const setInnerText = (id , text) =>{
    document.getElementById(id).innerText = text
}

const displayTemperature = temperature =>{
    console.log(temperature)
    setInnerText('city',temperature.name)
    setInnerText('weather',temperature.weather[0].main)
    setInnerText('temp',temperature.main.temp)

    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById("image-icon")
    imgIcon.setAttribute('src',url)
}