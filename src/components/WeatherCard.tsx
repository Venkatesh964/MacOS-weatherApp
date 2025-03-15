import axios from "axios";
import { useEffect, useState } from "react"
import { MagnifyingGlassIcon, ChevronLeftIcon, ChevronRightIcon, ArrowsPointingOutIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
type weatherData={
    location:{
        country:string;
        localtime:string;
        name:string;
        region:string;
    },
    current:{
        temp_c: number,
        temp_f: number,
        humidity: number,
        cloud: number,
        condition: {
            text: string,
            icon: string,
        },
        wind_kph: number,
    },
    forecast:{
        forecastday:[
            {
                date: string,
                hour:[{
                    time: string,
                    temp_c: number,
                    temp_f: number,
                    condition: {
                        icon: string,
                    },
                }],
                day: {
                maxtemp_c: number,
                maxtemp_f: number,
                mintemp_c: number,
                mintemp_f: number,
                condition: {
                    text: string,
                    icon: string,
                  
                },
                
            }}
        ]
    }
}
const apiKey= import.meta.env.VITE_API_KEY
const baseUrl=import.meta.env.VITE_BASE_URL;
export const WeatherCard=()=>{
    const [location, setLocation]= useState("Hyderabad");
    const [weatherData, setWeatherData]= useState<weatherData>();
    function fetchData(){
        axios.get(`${baseUrl}?key=${apiKey}&q=${location}&days=7`).then((res)=>{setWeatherData(res.data)}).catch((e)=> console.log(e));
    }
    useEffect(()=>{
        axios.get(`${baseUrl}?key=${apiKey}&q=${location}&days=7`).then((res)=>{setWeatherData(res.data)}).catch((e)=> console.log(e));
    }, []);
    if(!weatherData){
        return <div>loading...</div>
    }

    return <div className="mx-auto w-170 mt-2 ">
        <div className="w-full border  border-stone-800 rounded-md shadow-2xl overflow-auto">
        <div className="flex justify-around py-1 shadow-3xl  bg-stone-950/50">
            <div className="flex">
                <ChevronLeftIcon width={16}/>
                <ChevronRightIcon width={16}/>
            </div>
            <div>
                <form onSubmit={(e)=>{fetchData();e.preventDefault()}} className="flex border border-slate-400 rounded-md pl-1">
                    <MagnifyingGlassIcon width={16} style={{cursor:'pointer'}} onClick={fetchData}/>
                    <input onChange={(e)=>setLocation(e.target.value)} placeholder="Your city" className="text-sm px-2 outline-none"></input>
                </form>
            </div>
            <div>
                <ArrowsPointingOutIcon width={16}/>
            </div>
        </div>
        <div className="bg-stone-800 px-4 py-4 flex flex-col gap-2">

        <div className="border-10 border-black rounded-3xl px-4   py-1 bg-indigo-950">
            <div className="flex justify-between ">
                <div className="pt-2 ">
                  
                    <div className="text-2xl font-medium">{weatherData.location.name}, {weatherData.location.country.slice(0,2)}</div>      
                    <div className="text-sm">{weatherData.location.localtime.split(' ')[1]}</div>
                    <div className="pt-1">
                        <span className="text-4xl font-medium">{weatherData.current.temp_c} </span>
                      
                    </div>
                </div>
                <div className=" text-right">
                    <div className="flex justify-end">
                        <img src={`${weatherData.current.condition.icon}`} className="h-12 " ></img>
                    </div>
                    <div className="font-medium pb-0.5">{weatherData.current.condition.text}</div>
                    <div className="text-sm text-right">Humidity : {weatherData.current.humidity} %</div>
                    <div className="text-sm">Rain Probability : {weatherData.current.cloud} %</div>
                    <div className="text-sm">Wind Speed : {weatherData.current.wind_kph}km/hr</div>
                    
                </div>
            </div>
            <div className="pt-4 flex w-full justify-around pb-2">
                {
                    weatherData.forecast.forecastday[0].hour.map((curData, i)=>(
                        
                        i%3===0 &&(<motion.div  whileHover={{
                            scale: 1.2,
                            transition: { duration: 1 },
                          }}
                          whileTap={{ scale: 0.9 }}>
                            <div className="flex justify-center">{curData.time.split(" ")[1]}</div>
                            <motion.div className="flex justify-center"
                           
                            >
                                <img src={`${curData.condition.icon}`} className="h-8"/>
                            </motion.div>
                            <div className="flex justify-center">{Math.floor(curData.temp_c)}</div>
                        </motion.div>)
                    ))
                }
               
            </div>
        </div>
        <div className="border-10 border-black rounded-3xl overflow-auto ">
            <div className="  bg-linear-to-b from-indigo-950 to-indigo-800 px-4  py-2 text-sm">
            {
                weatherData.forecast.forecastday.map((curData)=>(
                    <div className="flex w-full cursor-pointer">
                        <div className="w-1/3">{weekday[new Date(curData.date).getDay()] }</div>
                        <div className="flex w-1/3">
                            <div className="flex items-center">
                                <img src={`${curData.day.condition.icon}`} className="h-6"></img>
                            </div>
                            <div className="flex items-center">{curData.day.condition.text}</div>
                        </div>
                        <div className="flex w-1/3"> 
                            <div className="flex w-full text-right">
                                <div className="w-1/2">{curData.day.mintemp_c}</div>
                                <div className="w-1/2">{curData.day.maxtemp_c}</div>
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
        </div>
        </div>
    </div>
}