import CityName from './CityName';
import CitySelection from './CitySelection';

//1. import the useState and useEffect hooks from the react library
import {useState, useEffect} from 'react';



//2. import axios

import axios from 'axios';
import { eventWrapper } from '@testing-library/user-event/dist/utils';

const ListOfCities = () => {

    //3. initialize state to hold the data - cityName will be returned from the api
    const [cityName, setCityName] = useState('');

    // 

   
    




//4. define a side effect which will run ONCE on component mount to make a request to the API
// city names

useEffect(() => {


    axios(
        {
            baseURL: 'http://dataservice.accuweather.com/locations/v1/cities/autocomplete',
                params: {
                    apikey: '5C7XkvLTaPsO5dFsQqLGb9Qffqwg114a',
                    q: cityName
                
            }

        }).then((apiData) => {
        console.log(apiData.data);
        // save the array of movies within State: 
        // setCityName(apiData.data);
        

       
    })




},[cityName])

// define a event handler which we be passed via props to CityName component
    // when this is called, the event handler will log out the value of the chosen city name

const selectCityName = (event, chosenCityName) => {
    event.preventDefault();

    
    // call the state updater function and use the selected option value to update.
    setCityName(chosenCityName);
}

    

    return (
        <section>
            
            <CitySelection handleSubmit= {selectCityName}  />
            <CityName citySelection = {cityName} />
            

        </section>

    )
}

export default ListOfCities;