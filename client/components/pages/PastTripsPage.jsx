import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import TripWeatherbar from '../TripWeatherbar';
import { useLocation } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PastTripsPage = ({user})=>{

  const location = useLocation();
const { trip }= location.state
  const logout = () =>{
    window.open(`${process.env.REACT_APP_CLIENT_URL}auth/logout`, "_self");
  }

 
const [ weatherData, setweatherData ] = useState(null);

//a function that we will pass weather data from weatherbar up.
const updateWeatherDataState = (weatherdata)=>{
 setweatherData(weatherdata)
};


console.log('weatherdata',weatherData)

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 2000,
};


if(trip){
return(
  <div className="ChosenCampGroundPage">
   <div className="topBar" style={{position: 'fixed', top: 0, left: 0, right: 0,backgroundColor:'rgb(56, 125, 125)', zIndex:1, marginBottom: "30px"}}>
<h1 className="weekendertext">
<Link to="/" style={{textDecoration: 'none', color: 'white'}}>WEEKENDER </Link></h1>
<h1 className='welcome'>{trip.campsiteName}</h1>
  <button className='logoutButton' onClick={(logout)}>Log Out</button>
</div>
<div className='WeatherBarDiv' style={{marginTop:'90px'}}>
   <TripWeatherbar trip={trip} updateWeatherDataState={updateWeatherDataState}/>
   </div>
   <div className='photoSlider'>
<Slider {...settings}>
{trip?.campsiteImg.map((image) => (
<div className="no">
     <img className='ChosenCampGroundPhotos' src={image.URL} />
     <span className="text">{trip.campsiteName}</span>
     </div>
))}
</Slider>
</div>
<div className='BottomStuff'>
   <div className="ChosenCampGroundDesc"dangerouslySetInnerHTML={{ __html: trip.campsiteDesc}} />
   </div>
   </div>
 )
}
};

export default PastTripsPage