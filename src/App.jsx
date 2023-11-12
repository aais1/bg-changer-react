import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("orange")

  function handleClick(color){
    setColor(color);
  }
  return (
    <>
      <div className="p-0 bg-black h- w-screen h-screen flex justify-center" style={{backgroundColor:color}}>
        <div className="bg-orange-300 p-3 rounded-md flex absolute bottom-10" >
          <div>
            <button className="bg-red-500 text-white outline-none rounded-lg px-6 py-2 m-2" onClick={()=>{handleClick('red')}} >Red</button>
          </div>
          <div >
            <button className="bg-blue-500 text-white outline-none rounded-lg px-6 py-2 m-2"  onClick={()=>{handleClick('blue')}} >Blue</button>
          </div>
          <div >
            <button className="bg-indigo-500 text-white outline-none rounded-lg px-6 py-2 m-2"  onClick={()=>{handleClick('indigo')}}>Indiago</button>
          </div>
          <div >
            <button className="bg-violet-500 text-white outline-none rounded-lg px-6 py-2 m-2"  onClick={()=>{handleClick('violet')}}>Violet</button>
          </div>
          <div >
            <button className="bg-pink-500 text-white outline-none rounded-lg px-6 py-2 m-2"  onClick={()=>{handleClick('pink')}} >Pink</button>
          </div>
          <div >
            <button className="bg-purple-500 text-white outline-none rounded-lg px-6 py-2 m-2"  onClick={()=>{handleClick('purple')}} >Purple</button>
          </div>
          <div >
            <button className="bg-yellow-500 text-white outline-none rounded-lg px-6 py-2 m-2"  onClick={()=>{handleClick('yellow')}}>Yellow</button>
          </div>
          <div >
            <button className="bg-lime-500 text-white outline-none rounded-lg px-6 py-2 m-2"   onClick={()=>{handleClick('lime')}}>Lime</button>
          </div>
          <div>
            <button className="bg-orange-600 text-white outline-none rounded-lg px-6 py-2 m-2" onClick={()=>handleClick('orange')} >Reset</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
