
//using props to pass down the selection of the api and displaying it on the website.
const DisplayInfo = (props) => {
   const dailyForecasts = props.weatherInfo.DailyForecasts && props.weatherInfo.DailyForecasts
   const tomorrowForecasts = props.weatherInfo.Headline && props.weatherInfo.Headline 
   const formattedDate = dailyForecasts && new Date(dailyForecasts[0].Date).toISOString().split('T')[0];
   const tomorrowDate = tomorrowForecasts && new Date(tomorrowForecasts.EffectiveDate).toISOString().split('T')[0];
    return (

        
        
        <section className="box">
            {/* <h2 className="city">{props.citySelection}</h2> */}

            {/*Info about today's weather */}
            {dailyForecasts &&
            <>
            
            <div className="date all-border">
                <h3 className="weather">Today's date for Weather</h3>
                <p className="display stylingDate">{formattedDate}</p>
            </div>
            <div className="temp all-border">
                <h3 className="weather">Today's Temperature</h3>
                <p className="display stylingDate">{dailyForecasts[0].Temperature.Maximum.Value}°F</p>
            </div>
            <div className="day all-border">
                <h3 className="weather">Daytime Weather</h3>
                <p className="display stylingDate">{dailyForecasts[0].Day.IconPhrase}</p>
            </div>
            <div className="night all-border">
                <h3 className="weather">Nighttime Weather</h3> 
                <p className="display stylingDate">{dailyForecasts[0].Night.IconPhrase}</p>
            </div>
            
            </>
}    
           {/*Info for tomorrow's weather */}
           {tomorrowForecasts && 

           <>
           <div className="date all-border">
                <h3 className="newWeather">Upcoming Weather</h3> 
                <p className="display stylingDate"> {tomorrowDate}</p>
            </div>
            <div className="date all-border">
                {<p className="newWeather">Future Weather Update</p> }
                <p className="display stylingDate">{props.weatherInfo.Headline.Category}</p>
           </div>
           <div className="date all-border">
                {<p className="newWeather">More Details on Weather</p> }
                <p className="display stylingDate text"> {props.weatherInfo.Headline.Text}</p>
           </div>
           </>

}

        </section>
    )
}

export default DisplayInfo;