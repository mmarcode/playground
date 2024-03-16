const fs = require('fs');
const axios = require('axios');

class Searchs {
  history = [];
  dir = './db';
  file = 'data.json';

  constructor() {
    this.read();
  }

  get capitalizedHistory() {
    return this.history.map(sentence => {
      return sentence.replace(/\b\w/g, char => {
        return char.toUpperCase();
      });
    });
  }

  get getParamsOpenWeather() {
    return {
      'appid': process.env.OPENWEATHER_KEY,
      'units': 'metric'
    }
  }

  get getHeadersAmadeus() {
    return {
      'Authorization': process.env.AMADEUS_KEY
    }
  }

  async cities( keyword, max ) {
    try {
      const instance = axios.create({
        baseURL: process.env.URL_AMADEUS_KEY,
        headers: this.getHeadersAmadeus,
        params: { keyword, max }
      });

      const response = await instance.get();
      return response.data.data.map( (place, i) => ({
        id: i + 1,
        name: place.name,
        lng: place.geoCode.longitude,
        lat: place.geoCode.latitude
      }));
    } catch(err) {
      return [];
    }
  }

  async weatherConditions( lat, lon ) {
    try {
      const instance = axios.create({
        baseURL: process.env.URL_OPENWEATHER_KEY,
        params: { ...this.getParamsOpenWeather, lat, lon }
      });

      const response = await instance.get();
      const { weather, main } = response.data;

      return {
        description: weather[0].description,
        minimumTemperature: main.temp_min,
        maximumTemperature: main.temp_max,
        temperature: main.temp
      }
    } catch(err) {
      return [];
    }
  }

  addHistory( place = '' ) {
    if(this.history.includes( place.toLocaleLowerCase() ))
      return;

    this.history.unshift( place.toLocaleLowerCase() );
    this.save();
  }

  save() {
    try {
      if( !fs.existsSync( this.dir ) )
        fs.mkdirSync( this.dir );

      const payload = {
        history: this.history
      };

      fs.writeFileSync( `${ this.dir }/${ this.file }`, JSON.stringify( payload ) );
    } catch ( err ) {
      throw err;
    }
  }

  read() {
    try {
      if( !`${ this.dir }/${ this.file }` )
        return null;

      const info = fs.readFileSync( `${ this.dir }/${ this.file }`, { encoding: 'utf-8' } );
      const data = JSON.parse( info );
      this.history = data.history;
    } catch( err ) {
      throw err;
    }
  }
}

module.exports = Searchs;