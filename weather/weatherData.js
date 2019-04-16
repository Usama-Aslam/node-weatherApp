console.log("starting app.js");

const request = require("request");
const API_KEY = "Your API KEY";

//callback
// const getWeatherData = (lat, lng, callback) => {
//   request(
//     {
//       url: `https://api.darksky.net/forecast/${API_KEY}/${lat},${lng}`,
//       json: true
//     },
//     (error, response, body) => {
//       if (!error && response.statusCode == 200) {
//         const {
//           temperature,
//           apparentTemperature,
//           windSpeed,
//           humidity
//         } = body.currently;

//         callback(undefined, {
//           temperature,
//           humidity,
//           windSpeed,
//           apparentTemperature
//         });
//       } else callback("Unable to fetch Weather data");
//     }
//   );
// };

//promise
const getWeatherData = (lat, lng) => {
  return new Promise((resolve, reject) => {
    request(
      {
        url: `https://api.darksky.net/forecast/${API_KEY}/${lat},${lng}`,
        json: true
      },
      (error, response, body) => {
        if (!error && response.statusCode == 200) {
          const {
            temperature,
            apparentTemperature,
            windSpeed,
            humidity
          } = body.currently;

          resolve({
            temperature,
            humidity,
            windSpeed,
            apparentTemperature
          });
        } else reject("Unable to fetch Weather data");
      }
    );
  });
};

module.exports = {
  getWeatherData
};
