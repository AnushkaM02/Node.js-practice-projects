// const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=1e77963d40f7eccfd28ec8d938f7ea0f&query=37.8267,-122.4233&units=f";

const forecast = require("./utils/forecast");

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to weather service");
//   } else if (response.body.error) {
//     console.log("Unable to find location");
//   } else {
//     // console.log(response.body.current);
//     // const temp = response.body.current.temperature;
//     // const apparent_temp = response.body.current.feelslike;
//     // console.log(
//     //   `It is ${temp} degrees out. It feels like ${apparent_temp} degrees.`
//     // );
//     // console.log(response.body.current.weather_descriptions[0]);
//   }
// });

forecast(19.07, 72.87, (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
