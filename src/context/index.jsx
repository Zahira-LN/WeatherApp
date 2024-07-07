import { useContext,createContext,useState,useEffect } from "react";
import axios from "axios";

const stateContext = createContext()


export const stateContextProvider = ({childrean})=>{
    const [weatther,useWeather] = useState({});
    const [values,setValues]  = useState([])

    const [place,setPlace] = useState('Lakkavalli');

    const [location,setLocation] = useState('');

    const fetchWeather = () =>{
        const options ={
            method:'GET',
            url:'https://visual-crossing-weather.p.rapidapi.com',
            params:{
                aggregateHours:'24',
                location:place,
                contentType:'json',
                unitGroup:'matric',
                shortColumnNames:0
            },
            headers:{
                'X-RapidAPI-key' :VITE_API-KEY,
                'X-RapidAPI-Host' : 'visual-crossing-weather.p.rapidapi.com',
            }
        }
    }

}