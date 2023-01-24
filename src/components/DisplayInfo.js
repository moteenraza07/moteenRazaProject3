
//using props to pass down the selection of the api and displaying it on the website.
const DisplayInfo = (props) => {
   const dailyForecasts = props.weatherInfo.DailyForecasts && props.weatherInfo.DailyForecasts
   const tomorrowForecasts = props.weatherInfo.Headline && props.weatherInfo.Headline 
   const formattedDate = dailyForecasts && new Date(dailyForecasts[0].Date).toISOString().split('T')[0];
   const tomorrowDate = tomorrowForecasts && new Date(tomorrowForecasts.EffectiveDate).toISOString().split('T')[0];
    return (
        
        <section className="box">
            <h2 className="city">{props.citySelection}</h2>

            {/*Info about today's weather */}
            {dailyForecasts &&
            <>
            
            <div className="date all-border">
                <h3 className="weather">Today's date</h3>
                <p className="display">{formattedDate}</p>
            </div>
            <div className="temp all-border">
                <h3 className="weather">Temperature</h3>
                <p className="display">{dailyForecasts[0].Temperature.Maximum.Value}°F</p>
            </div>
            <div className="day all-border">
                <h3 className="weather">Daytime Weather</h3>
                <p className="display">{dailyForecasts[0].Day.IconPhrase}</p>
            </div>
            <div className="night all-border">
                <h3 className="weather">Night time Weather</h3> 
                <p className="display">{dailyForecasts[0].Night.IconPhrase}</p>
            </div>
            
            </>
}    
           {/*Info for tomorrow's weather */}
           {tomorrowForecasts && 

           <>
           <div className="date all-border">
                <h3 className="newWeather">Tomorrow's Date</h3> 
                <p className="display"> {tomorrowDate}</p>
            </div>
            <div className="date all-border">
                {<p className="newWeather">Tomorrow's Weather</p> }
                <p className="display">{props.weatherInfo.Headline.Category}</p>
           </div>
           <div className="date all-border">
                {<p className="newWeather">Tomorrow's Weather</p> }
                <p className="display"> {props.weatherInfo.Headline.Text}</p>
           </div>
           </>

}

        </section>
    )
}

export default DisplayInfo;