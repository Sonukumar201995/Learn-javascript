let p = fetch("https://api.open-meteo.com/v1/forecast?latitude=28.7&longitude=77.1&current_weather=true");

p.then((response) => {
    console.log(response.status);
    console.log(response.ok)
    return response.json();   // JSON me convert
})
.then((data) => {
    console.log(data);        // actual weather data
})
.catch((error) => {
    console.log(error);
});
