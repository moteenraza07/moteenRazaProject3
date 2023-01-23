// import useState

import {useState} from 'react';


const CitySelection = ({handleSubmit}) => {
    
    //initialize state to keep track of the user's dropdown selection
    const [dropDownSelection, setDropDownSelection] = useState('placeholder');

    // define a handleChange function 
    const handleChange = (event) => {
        setDropDownSelection(event.target.value);
    }
    
    
    
    
    return (
        //C. define a submit event listener and call the event handler which has been passed down via props
            // pass it the userSelection stae as an argument
        <form action="" onSubmit={(event) => {handleSubmit(event, dropDownSelection)}}>

        <label htmlFor="filtration">Show me the weather from the city selected ➡</label>
            {/*in order to associate a label with an input, use the for and id attribute */}
            {/* in order for REact to know what  */}

            {/*1. listen for the 'change' event within the dropdown */}
            <select name="filtration" id="filtration" onChange={handleChange} value = {dropDownSelection}>
                {/*1A pass in an onChange event handler */}

                {/*2E. use the state for the dropdown to subsequently dictate the value of the element ( close the state loop - aka have the value of the dropdown be dictated by react)  */}
                <option value="placeholder" disabled>Select a City</option>
                <option value="Mississauga">Mississauga</option>
                <option value="Oakville">Oakville</option>
                <option value='Milton'>Milton</option>
                <option value="Toronto">Toronto</option>
                <option value="Brampton">Brampton</option>
                <option value="Vaughn Mills">Vaughn Mills</option>
            </select>
            <button>Click to view the weather!</button>



        </form>
    )
}

export default CitySelection;