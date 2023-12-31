import React, { useEffect, useState } from "react";
import axios from "axios"

function App() {
  // const akey = `https://api.openweathermap.org/data/2.5/weather?q=lakhisarai&appid=407316314c74423e59cb81218a0fae5c`
  // const akey = `http://api.weatherapi.com/v1/current.xml?key=cdf7a85f0fb24d5a9ec73358230411&q=London`
  
  
  const [mydata, setMydata] = useState({})
  
  const [location, setLocation] = useState('')
  
  
  const akey = `https://api.weatherapi.com/v1/current.json?key=cdf7a85f0fb24d5a9ec73358230411&q=${location}`
  // console.log("location",location);
  console.log(location);

  const SearchLocation = () =>{
    axios.get(akey).then((response)=>{
      setMydata(response.data);
      console.log("response is ",response.data);
    })
    console.log("clicked ");
  }
  useEffect(() => {
    console.log("useEffect run")
  
    // return () => {
    //   second
    // }
  }, [mydata])
  

  // SearchLocation();
  // console.log("mydata is ",mydata.location.name);
  return (
    <div className="App">
      <div className="serch">
          <div>
            <input type="text" value={location} onChange={event =>setLocation(event.target.value)} />
            <button onClick={SearchLocation}>Click ME</button>
          </div>
      </div>
      <div className="both">

        <div>
        <h1>{mydata.location ? mydata.location.name : null}</h1>
        <h1>{mydata.location ? mydata.location.region : null}</h1>
        <h1>{mydata.location ? mydata.location.country : null}</h1>
          
          
          {/* <h1>New Delhi</h1> */}
          <h1>{mydata.current ? mydata.current.temp_c : null}</h1>
          <h1>{mydata.current ? mydata.current.condition.text : null}</h1>
          {/* <h1>{mydata.current.temp_c}</h1> */}
          
          <h1>Clouds</h1>
        </div>
        <div className="lowerPart">
          <div>
            <h1>65*F</h1>
            <h1>Feels like</h1>
          </div>
          <div>
            <h1>70%</h1>
            <h1>Humidity</h1>
          </div>
          <div>
            <h1>2MPH</h1>
            <h1>Winds</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
