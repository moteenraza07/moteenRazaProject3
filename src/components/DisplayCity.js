// create a component that will display city name once the city has been selected
// props will be needed to pass down information to child component
const DisplayCity = (props) => {
    return (
         
            <h2 className="city"><span className="black">Weather for</span> {props.citySelection}</h2>
        )
        
    
}

export default DisplayCity;