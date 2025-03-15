
import { Calender, FaceTime, appStore, books, calculator, camera, keyTone, map, music, phone, photo, podcast, remainder, twitter, weather } from '../config'
import {motion} from 'framer-motion';

export const Desktop = () => {
  return (
    <div className='absolute top-[98vh] translate-y-[-98%] w-full'>
        <div className='flex justify-center'>
            <motion.div className='inline-flex  gap-4 justify-center border border-stone-500 rounded-2xl mx-auto px-3 py-2 bg-stone-800'
            
            >
                 <div className='border-r border-slate-400 pr-3'>
                <motion.img src={calculator} className='h-12 w-12 rounded-lg cursor-pointer'
                whileHover={{
                    scale: 1.5,
                    transition: { duration: 0.5 },
                  }}
                  whileTap={{ scale: 0.8 }}          
                ></motion.img>
                </div>
                    <img src={Calender} className='h-12 w-12 rounded-lg border border-amber-100'></img>
            
                
                <img src={FaceTime} className='h-12 w-12 rounded-lg'></img>
                {/* <img src={remainder} className='h-12 w-12 rounded-lg border border-amber-100'></img> */}
                {/* <img src={appStore} className='h-12 w-12 rounded-lg'></img> */}
                <div className='border-r border-slate-400 pr-3'>
                <img src={weather} className='h-12 w-12 rounded-lg'></img>
                </div>
                {/* <img src={keyTone} className='h-12 w-12 rounded-lg'></img> */}
                
                <img src={twitter} className='h-12 w-12 rounded-lg'></img>
                {/* <img src={books} className='h-12 w-12 rounded-lg'></img> */}
                <img src={camera} className='h-12 w-12 rounded-lg'></img>
                <img src={podcast} className='h-12 w-12 rounded-lg'></img>
                <div className='border-r border-slate-400 pr-3'>
                <img src={map} className='h-12 w-12 rounded-lg'></img>
                </div>
                {/* <img src={phone} className='h-12 w-12 rounded-lg'></img> */}
                <div className='border-r border-slate-400 pr-3'>
                <img src={music} className='h-12 w-12 rounded-lg border border-amber-100'></img>
                </div>
                <motion.img src={photo} className='h-12 w-12 rounded-lg cursor-pointer border border-amber-100'
                 whileHover={{
                    scale: 1.5,
                    transition: { duration: 0.5 },
                  }}
                  whileTap={{ scale: 0.8 }}

                ></motion.img>
            
            </motion.div>
        </div>
    </div>
  )
}
