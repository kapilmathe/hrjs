const request = require('request');


var geocodeAddress = function (address) {
    return new Promise((resolve, reject) => {
        var encodedAddress = encodeURIComponent(address);

        request({
                url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
                json: true
            },
            (error, response, body) => {
                if (error) {
                    reject('Unable to connect Google servers.')
                } else if (body.status === 'ZERO_RESULTS') {
                    reject("Address not available")
                } else if (body.status === 'OK') {
                    resolve({
                        Address: body.results[0]['formatted_address'],
                        Latitude: body.results[0]['geometry']['location']['lat'],
                        Longitude: body.results[0]['geometry']['location']['lng']
                    })
                }
            });
    })
}

module.exports.geocodeAddress = geocodeAddress