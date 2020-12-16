const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=ac478adfea7025ee944652d21801eb26&query="+latitude+","+longitude;
    request({url: url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to weather services!', undefined)
        }
        else if(body.error) {
            callback('Unable to find the location!', undefined)
        }
        else {
            callback(undefined,"Its currently "+body.current.temperature+" degrees out. It feels like "+body.current.feelslike+" degrees out!");
        }
    } )
}

module.exports = forecast;