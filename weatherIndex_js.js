const apiKey = "25a2d1f1452c4c3ca3042920243009";

async function checkWeather(loc) {
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${loc}`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);

        document.querySelector(".loc").innerHTML = data.location.name;
        document.querySelector(".temp").innerHTML = Math.round(data.current.temp_c) + "&deg C";
        document.querySelector(".feelslike").innerHTML = Math.round(data.current.feelslike_c) + "&deg C";
        document.querySelector(".humi").innerHTML = data.current.humidity + "%";
        document.querySelector(".cond").innerHTML = data.current.condition.text;
        document.querySelector(".wind").innerHTML = data.current.wind_kph + "&nbsp km/h";
        document.querySelector(".wind_deg").innerHTML = data.current.wind_degree + "&deg";
        document.querySelector(".wind_dir").innerHTML = data.current.wind_dir;
        document.querySelector(".cloud").innerHTML = data.current.cloud;
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

const submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
    e.preventDefault();
    const loc = document.getElementById("search-location").value;
    checkWeather(loc);
});
checkWeather("kolkata");