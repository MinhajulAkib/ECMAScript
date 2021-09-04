const API_KEY = `d5100dc1f3fe6cbddaff28f8e239d717`;
const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    
    fetch (url)
    .then(res =>res.json())
    .then(data => displayTemperature(data));
}

const displayTemperature = temperature => {
      console.log(temperature);
}