const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather')

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

geocode.geocodeAddress(argv.address)
.then((results)=>{
    console.log(results)
    return weather.getWeather(results['Latitude'], results['Longitude'])
  }
)
.then((result)=>{
  console.log(result)
})
.catch((errorMessage)=>{
  console.log(errorMessage)
})
