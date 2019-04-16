console.log("starting app.js");

const request = require("request");
const yargs = require("yargs");

const geocode = require("./geocode/geocode");
const weather = require("./weather/weatherData");

const argv = yargs
  .option({
    a: {
      demand: true,
      alias: "address",
      description: "address to fetch",
      string: true
    }
  })
  .help()
  .alias("help", "h").argv;

//using callbacks
// geocode.geocodeAddress(argv.address, (errorMessage, result) => {
//   if (errorMessage) {
//     console.log(errorMessage);
//     return;
//   } else {
//     console.log("Your Location", JSON.stringify(result, undefined, 2));
//     weather.getWeatherData(
//       result.latitude,
//       result.longitude,
//       (error, result) => {
//         if (error) console.log(error);
//         console.log("Your Weather Result", result);
//       }
//     );
//   }
// });

// using promise
geocode
  .geocodeAddress(argv.address)
  .then(result => {
    weather
      .getWeatherData(result.latitude, result.longitude)
      .then(result => console.log(result))
      .catch(err => console.log(err));
  })
  .catch(err => {
    weather
      .getWeatherData(result.latitude, result.longitude)
      .then(result => console.log(result))
      .catch(err => console.log(err));
    console.log(err);
  });
