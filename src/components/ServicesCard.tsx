import { AirDrop, Wifi } from "../config"


export const ServicesCard = () => {
  return (
    <div className='absolute top-6 border border-slate-200 w-48 rounded-lg p-2'>
        <div className="flex w-full justify-between mt-1">
            <div className="border border-slate-200 rounded-lg flex px-2 py-2 gap-1">
                <div className="flex items-center">
                    <img src={Wifi} className="h-4 w-4"/>
                </div>
                <div className="flex items-center text-sm ">Wi-Fi</div>
                
            </div>
            <div className="border border-slate-200 rounded-lg flex px-2 py-2 gap-1">
                <div className="flex items-center">
                    <img src={AirDrop} className="h-4 w-4"/>
                </div>
                <div className="flex items-center text-sm ">Airdrop</div>
               
            </div>
        </div>

        <div className="border border-slate-200 rounded-lg mt-2 p-2">
            <div>System Color</div>
            <div>
                <ColorPicker/>
                
            </div>
        </div>

        <div>
            <WallPaperCard/>
        </div>

        <div className="flex gap-2 border border-slate-200 rounded-lg mt-1 p-2">
            <div>
                <Notch/>
            </div>
            <div>Notch</div>
        </div>
    </div>
  )
}

function WallPaperCard(){
    return <div className="flex border border-slate-200 p-2 rounded-lg mt-1 gap-2">
        <div className="flex">
            <img src="https://4kwallpapers.com/images/walls/thumbs_3t/188.jpg" className="rounded-lg" width={75} height={75}></img>
        </div>
        <div>
            <div>Catalina</div>
            <div>Dynamic Wallpaper</div>
        </div>
    </div>
}
function ColorPicker(){
    return <div className="flex gap-1">
        <div className="px-3 py-3 bg-amber-400 w-3 rounded-full">
           
        </div>
        <div className="px-3 py-3 bg-green-400 w-3 rounded-full"></div>
        <div className="px-3 py-3 bg-blue-400 w-3 rounded-full"></div>
        <div className="px-3 py-3 bg-cyan-400 w-3 rounded-full"></div>
        <div className="px-3 py-3 bg-violet-600 w-3 rounded-full"></div>
        <div className="px-3 py-3 bg-purple-400 w-3 rounded-full"></div>
        {/* <div className="px-3 py-3 bg-red-400 w-3 rounded-full"></div> */}

        {/* <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div> */}
    </div>
}


function Notch(){
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
  </svg>
  
}

// function Wifi(){
//     return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
//     <path stroke-linecap="round" stroke-linejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" />
//   </svg>
  
// }

// function Setting(){
//     return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
//     <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z" />
//     <path stroke-linecap="round" stroke-linejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008Z" />
//   </svg>
  
// }
