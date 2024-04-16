import React, { useEffect } from 'react'
import { useProgress } from '@react-three/drei'

function LoadingScreen(props) {
    const { started, setStarted } = props;
    const { progress, total, loaded, item } = useProgress();
   
    useEffect(() => {
        // console.log(progress, total, loaded, item)
        if (progress === 100) {
            setTimeout(() => {
                setStarted(true);
            },500)
        }
    },[progress,total,loaded,item])
    return (
        <div className='relative'>  
         
            <div className={`fixed top-0 left-0 w-full h-full z-50 transition-opacity duration-1000 pointer-events-none flex flex-col items-center justify-center bg-purple-200 ${started ? "opacity-0" : "opacity-100"}`}>
                <img src="/projects/me.jpg" alt="mypic" className={`animate-bounce w-[200px] h-[200px] rounded-full imgshadow object-cover object-top mb-20`}/>
                <p className='top-0 text-gray-500'>Hey👋, Welcome to my portfolio</p>
                <div className='text-4xl md:text-9xl font-bold text-purple-900 relative'>
                    
              <div className='absolute left-0 top-0 overflow-hidden truncate text-clip transition-all duration-500'
                  style={{
                  width:`${progress}%`,
              }}>
                  David Mwas
              </div>
              <div className='opacity-40 '>David Mwas</div>
                </div>
                
                <div className='mt-5 mb-5'>
                    <span className="text-gray-500">npm run dev... </span>
                    <span className='text-gray-500 font-bold text-2xl'> {`${Math.floor(progress)} %`}</span>
                </div>
                
            </div>
             </div>
  )
}

export default LoadingScreen