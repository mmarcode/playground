require('dotenv').config();
const { showMenu, readInput, pause, showPlaces } = require("./helpers/inquirer");
const Searchs = require("./models/searchs");

const init = async() => {
  let option;
  const searchs = new Searchs();

  do {
    option = await showMenu();

    switch( option ) {
      case 1:
        const place = await readInput( 'City:' );
        const places = await searchs.cities( place, 5 );
        const id = await showPlaces( places );
        //if( id === 0 )
        //  continue;

        const selectedPlace = places.find( val => val.id === id + 1 );
        searchs.addHistory( selectedPlace.name );
        const weatherConditions = await searchs.weatherConditions( selectedPlace.lat, selectedPlace.lng );

        console.clear();
        console.log('\nCity information\n'.green);
        console.log(`City: ${ selectedPlace.name.green }`);
        console.log(`Latitude: ${ selectedPlace.lat }`);
        console.log(`Longitude: ${ selectedPlace.lng }`);
        console.log(`Temperature: ${ weatherConditions.temperature }`);
        console.log(`Minimum: ${ weatherConditions.minimumTemperature }`);
        console.log(`Maximum: ${ weatherConditions.maximumTemperature }`);
        console.log(`What's the weather like: ${ weatherConditions.description.green }`);
        break;
      case 2:
        console.log();
        searchs.capitalizedHistory.forEach(( place, i ) => {
          const idx = `${ i + 1 }.`.green;
          console.log(`${ idx } ${ place }`);
        });
        break;
    }

    if( option !== 0 )
      await pause();

  } while( option !== 0 );
}

init();