console.log("starting geocode.js");
const request = require("request");

//code for callback
// const geocodeAddress = (address, callback) => {
//   const encodedAddress = encodeURIComponent(address);
//   console.log("run");
//   request(
//     {
//       url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
//       json: true
//     },
//     (error, response, body) => {
//       if (error) callback("UNABLE TO CONNECT TO GOOGLE");
//       else if (body.status === "ZERO_RESULT") callback("Unable to get address");
//       else if (body.status === "OK") {
//         callback(undefined, {
//           address: body.results[0].formatted_address,
//           latitude: body.results[0].geometry.location.lat,
//           longitude: body.results[0].geometry.location.lng
//         });
//       } else console.log("Something is wrong");
//     }
//   );
// };

//using promise
const geocodeAddress = (address, callback) => {
  return new Promise((resolve, reject) => {
    const encodedAddress = encodeURIComponent(address);
    console.log("run");
    request(
      {
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
      },
      (error, response, body) => {
        if (error) reject("UNABLE TO CONNECT TO GOOGLE");
        else if (body.status === "ZERO_RESULT") reject("Unable to get address");
        else if (body.status === "OK") {
          resolve({
            address: body.results[0].formatted_address,
            latitude: body.results[0].geometry.location.lat,
            longitude: body.results[0].geometry.location.lng
          });
        } else console.log("Something is wrong");
      }
    );
  });
};

module.exports = {
  geocodeAddress
};
