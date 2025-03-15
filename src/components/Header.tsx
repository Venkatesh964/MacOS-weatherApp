import { useState } from "react";
import { Modal } from "./Modal";
import { ServicesCard } from "./ServicesCard";


export const Header = () => {
    const date= new Date();
    // console.log(date.toLocaleTimeString())
    // console.log(date.toDateString())
    //console.log(date.getDay() + " "+ date.getMonth() +" "+ date.getDate() +" "+ date.getHours() +" "+ date.getMinutes());
    const [openHelp, setOpenHelp]= useState(false);
    const [openService, setOpenService]= useState(false);
    console.log(openService)

    const handleOpenService=()=>{
        setOpenService((prev)=>!prev)
    }
    
  return (
    <div className="flex justify-between shadow-xl px-2 text-white pb-0.5">
        <div className='flex gap-4 text-sm items-center'>
        <div className="flex items-center text-xl pl-2">
            <AppleIcon/>
        </div>
        <div>Finder</div>
        <div>File</div>
        <div>Edit</div>
        <div>View</div>
        <div>Go</div>
        <div>Window</div>
        <div  className="relative cursor-pointer">
            <div onClick={()=>setOpenHelp((prev)=>!prev)}>Help</div>
            {
                openHelp && <Modal/>
            }
        </div>
        
        </div>
        <div className="flex text-sm items-center gap-4">
            <div className="text-sm flex items-center cursor-pointer relative" >
                <WifiSettings  onClick={handleOpenService}/>
                {
                    openService &&  <ServicesCard/>
                }
            </div>
            <div>{date.toDateString() + " "+ date.toLocaleTimeString()}</div>
        </div>
    </div>
  )
}

function AppleIcon(){
    return <span  aria-hidden="true"></span>
}

function WifiSettings({onClick}:{onClick:()=>void}){
    return <div onClick={onClick}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
  </svg>
  </div>

  
}