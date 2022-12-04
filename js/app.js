const API_KEY = `ebac0422e32068b9762ca97dca9aae1a`;

const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => temperature(data));
}

const temperature = data => {
    // const temperature = document.getElementById("temperature");
    // temperature.innerText = temp
    setInnerTextById("temperature", data.main.temp)
    setInnerTextById("condition", data.weather[0].main)
    // console.log(data.weather[0].main)
}

const setInnerTextById = (id, text) => {
    const temperature = document.getElementById(id);
    temperature.innerText = text;
}

document.getElementById("search-btn").addEventListener("click", () => {
    const searchField = document.getElementById("search-field");
    const city = searchField.value;
    // set city 
    document.getElementById("city").innerText = city;
    loadTemperature(city)
})

loadTemperature('dhaka')