import React, {useState} from "react";
import Form from './Form';
import ShowCard from "./ShowCard";

const WeatherMenu = () => {
    let urlWeather = "https://api.openweathermap.org/data/2.5/weather?appid=aeba8de67ad34ce68712228904ccb3eb&lang=es";
    let cityUrl = "&q=";
    // Preddicion de las siguientes horas
    let urlForecast = "https://api.openweathermap.org/data/2.5/forecast?appid=aeba8de67ad34ce68712228904ccb3eb&lang=es"
    // Obtencion de los datos
    const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
    // Controlando con un spinner
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    // Recibir datos del formulario
    const [location, setLocation] = useState("");
    // Llamada a la API
    const getLocation = async(loc) => {
        setLoading(true);
        setLocation(loc);
        // Obtener en tiempo real
        urlWeather = urlWeather + cityUrl + loc;
        await fetch(urlWeather).then((response) => {
            if (!response.ok) throw {response}
            return response.json();
        }).then((weatherData) => {
            console.log(weatherData);
            setWeather(weatherData);
        }).catch(error => {
            console.log(error);
            setLoading(false);
            setShow(false);
        });
        // Forecast
        urlForecast = urlForecast + cityUrl + loc;
        await fetch(urlForecast).then((response) => {
            if (!response.ok) throw {response}
            return response.json();
        }).then((forecastData) => {
            console.log(forecastData);
            setForecast(forecastData);

            setLoading(false);
            setShow(true);
        }).catch(error => {
            console.log(error);
            setLoading(false);
            setShow(false);
        });
    }
    return(
        <>
            <Form
                newLocation = {getLocation}/>
            <ShowCard
                showData = {show}
                loadingData = {loading}
                weather = {weather}
                forecast = {forecast}/>
        </>
    );
}

export default WeatherMenu;