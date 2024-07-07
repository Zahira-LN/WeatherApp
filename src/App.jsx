import { useEffect, useState } from "react";
import Temprature from "./component/Temprature";
import WeatherImage from "../src/assets/WeatherImage.jpg";

function App() {
  const [city, setCity] = useState("Bengaluru");
  const [WeatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const apiurl = `https://api.weatherapi.com/v1/current.json?key=5919a287f6bb4ab788282523240707&q=${city}&aqi=no`;
    fetch(apiurl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to Fetch Particular City");
        }
        return response.json();
      })
      .then((data) => {
        setWeatherData(data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, [city]);

  return (
    <>

    

    <div
      className="flex w-[100%] h-screen bg-[WeatherImage] mx-auto justify-center items-center flex-col"
      style={{
        backgroundImage: `url(${WeatherImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

<h1 className="text-center p-8 font-bold text-[30px]">Weather App</h1>
      <div className="md:w-[70%] w-[90%] h-[50%] flex ">
        <div className="md:w-1/3 w-[40%] py-5 px-2 bg-black/50 relative rounded-l">
          {WeatherData ? (
            <Temprature
              setCity={setCity}
              stats={{
                temp: WeatherData.current.temp_c,
                condition: WeatherData.current.condition.text,
                isDay: WeatherData.current.is_day,
                location: WeatherData.location.name,
                time: WeatherData.location.localtime,
              }}
            />
          ) : (
            <div>Loading...</div>
          )}
        </div>
        <div className="md:w-2/3 w-[60%] bg-black/35 p-3 rounded-r">
          <h1 className="text-center text-white/70 font-bold p-4 underline text-[16px]">
            Today Highlights
          </h1>
          <div className="grid grid-cols-2 gap-2">
            <div className="p-5 text-white/70 shadow-md bg-black/35 text-center flex flex-col rounded">
              <h1>Wind Status</h1>
              <span>
                {WeatherData ? WeatherData.current.wind_mph : "N/A"} mph
              </span>
            </div>
            <div className="p-5 text-white/70 shadow-md bg-black/35 text-center flex flex-col rounded">
              <span>Humidity</span>
              <span>{WeatherData ? WeatherData.current.humidity : "N/A"}%</span>
            </div>
            <div className="p-5 text-white/70 shadow-md bg-black/35 text-center flex flex-col rounded">
              <h1>Visibility</h1>
              <span>
                {WeatherData ? WeatherData.current.vis_miles : "N/A"} miles
              </span>
            </div>
            <div className="p-5 text-white/70 shadow-md bg-black/35 text-center flex flex-col rounded">
              <h1>Air Pressure</h1>
              <span>
                {WeatherData ? WeatherData.current.pressure_mb : "N/A"} mb
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
