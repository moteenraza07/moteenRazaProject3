import DisplayInfo from './DisplayInfo';
import CitySelection from './CitySelection';
import DisplayCity from './DisplayCity';

//1. import the useState and useEffect hooks from the react library
import {useState} from 'react';



//2. import axios

import axios from 'axios';


const ListOfCities = () => {

    //3. initialize state to hold the data - cityName will be returned from the api
    const [cityName, setCityName] = useState("");
    const [cityKey, setCityKey] = useState("");
    const [weatherInfo, setWeatherInfo] = useState({});
   

    //3b initialize another state that will hold the data for the first index from the city name array



//4. define a side effect which will run ONCE on component mount to make a request to the API
// city names

const callCity = (city) => {
    axios(
        {
            baseURL: 'https://dataservice.accuweather.com/locations/v1/cities/autocomplete',
                params: {
                    apikey: '5C7XkvLTaPsO5dFsQqLGb9Qffqwg114a',
                    q: city
                
            }

        }).then((apiData) => {
            // create a variable that will store the filtered array and then put it into the setCityKey function
            const info = apiData.data.filter(el => el.Country.ID === "CA" && el.AdministrativeArea.ID === "ON");
            setCityKey(info[0].Key);
           
        })
}

// use another axios that will retreive data back based on the city key selected
const handleSubmit = (e) => {
    e.preventDefault();
    axios(
        {
            baseURL: `https://dataservice.accuweather.com/forecasts/v1/daily/1day/${cityKey}`,
                params: {
                    apikey: '5C7XkvLTaPsO5dFsQqLGb9Qffqwg114a'
                
            }

        }).then((apiData) => {
            setWeatherInfo(apiData.data)
           
        })

}


// define a event handler which we be passed via props to CityName component
    // when this is called, the event handler will log out the value of the chosen city name

const handleClick = (event) => {
    event.preventDefault();
    const city = event.target.value;

    
    // call the state updater function and use the selected option value to update.
    setCityName(city);

    callCity(city);
    
    
}

console.log(weatherInfo)

    return (

        
        <section>
            {/* Parent component that will be used to pass down props*/}
            <CitySelection handleClick={handleClick} handleSubmit={handleSubmit} cityName={cityName}/>
            <DisplayCity citySelection={cityName} weatherInfo = {weatherInfo} />
            <DisplayInfo citySelection={cityName} weatherInfo = {weatherInfo} />
            

        </section>

    )
}

export default ListOfCities;