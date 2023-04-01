import { Link, useLocation } from 'react-router-dom'
import WeatherBar from '../Weatherbar';
import axios from 'axios';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ChosenCampground = ({ user })=>{
const location = useLocation();

const { campground , startDate, endDate }= location.state
console.log('test',campground, startDate, endDate)

  const logout = () =>{
    window.open(`${process.env.REACT_APP_CLIENT_URL}auth/logout`, "_self");
  }

  // create a function that on click,
  // endpoint is 'trips/trips/:id'
const saveTrip = () => {

axios.post(`trips/trips/${user.id}`,{
  "data":{
    "dateStart": startDate,
    "dateEnd": endDate,
    "campsiteImg": campground.MEDIA,
    "campsiteName": campground.FacilityName,
    "campsiteDesc": campground.FacilityDescription,
    "campsiteLong": campground.FacilityLongitude,
    "campsiteLat": campground.FacilityLatitude
  }
} ).then(()=> {
  console.log('successful trip save');
  window.location.reload();
  
}).catch((err) => {
  console.error('failure', err);
})
};

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

return(
<div className='ChosenCampGroundPage'>
<div className="topBar" style={{position: 'fixed', top: 0, left: 0, right: 0,backgroundColor:'rgb(56, 125, 125)', zIndex:1, marginBottom: "30px"}}>
<h1 className="weekendertext">
<Link to="/" style={{textDecoration: 'none', color: 'white'}}>WEEKENDER </Link></h1>
<h1 className='welcome'>{campground.FacilityName}</h1>
  <button className='logoutButton' onClick={(logout)}>Log Out</button>
</div>
<div style={{marginTop:'80px'}}>
   <div className='Weatherbar'><WeatherBar startDate={startDate} endDate={endDate} campground={campground}/></div>
   </div>
  
   <div className='photoSlider'>
   <Slider {...settings}>
{campground?.MEDIA.map((image) => (
  <div className="no">
        <img className='ChosenCampGroundPhotos' src={image.URL} />
        <span className="text">{campground.FacilityName}</span>
        </div>
))}
</Slider>
   </div>
   <div className='BottomStuff'>
   {/* <img className="ChosenCampGroundPhoto" src={campground.MEDIA[0].URL}/> */}

   <Link to='/upcoming-trip' style={{textDecoration: 'none', textEmphasisColor: 'white'}}>
   <button className='saveTripButton'  onClick={saveTrip} style={{backgroundColor: 'green', color: 'white', width: '9rem', height: '6rem', fontSize: '1.5rem', borderRadius: '1.4rem'}}>SAVE TRIP</button>
   </Link>
   <Link to='/new-trip' style={{textDecoration: 'none', textEmphasisColor: 'white'}}>
   <button className='goBackButton' style={{backgroundColor: 'blue', color: 'white', width: '9rem', height: '6rem', fontSize: '1.5rem', borderRadius: '1.4rem'}}>GO BACK</button>
   </Link>
   <div className="ChosenCampGroundDesc"dangerouslySetInnerHTML={{ __html: campground.FacilityDescription }} />
    <div className="ChosenCampGroundLat">Latitude:{campground.FacilityLatitude}</div>
    <div className="ChosenCampGroundLong">Longitude:{campground.FacilityLongitude}</div>
    </div>
    </div>
 )

};

export default ChosenCampground