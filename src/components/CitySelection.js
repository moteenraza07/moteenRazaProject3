// create a component that will allow users to select different cities from the form provided below
const CitySelection = ({handleSubmit, handleClick, cityName}) => {
    
    return (
        //C. define a submit event listener and call the event handler which has been passed down via props
            // pass it the userSelection stae as an argument
        <form action="" onSubmit={handleSubmit}>

        <label className='selectCity' htmlFor="filtration">Show me the weather from the city selected ➡</label>
            {/*in order to associate a label with an input, use the for and id attribute */}
            {/* in order for REact to know what  */}

            {/*1. listen for the 'change' event within the dropdown */}
            <select className="dropDown" name="filtration" id="filtration" onChange={handleClick} value = {cityName}>
                {/*1A pass in an onChange event handler */}

                {/*2E. use the state for the dropdown to subsequently dictate the value of the element ( close the state loop - aka have the value of the dropdown be dictated by react)  */}
                <option value="" disabled>Select a City</option>
                <option value="Mississauga">Mississauga</option>
                <option value="Oakville">Oakville</option>
                <option value='Milton'>Milton</option>
                <option value="Toronto">Toronto</option>
                <option value="Brampton">Brampton</option>
                <option value="Woodbridge">Woodbridge</option>
                <option value="Barrie">Barrie</option>
                <option value="Waterloo">Waterloo</option>

                
            </select>
            
            <button className='button'>Click to view the weather!</button>



        </form>
    )
}

export default CitySelection;