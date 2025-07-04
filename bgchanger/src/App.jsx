import {useState} from 'react';
function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{backgroundColor: color}}>
       { /* no need to add curly braces again for color */}
        <div className="fixed flex flex-wrap justify-center
        bottom-12 inset-x-10 px-2 ">
          <div className="flex flex-wrap justify-center
          gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl h-12">
            <button onClick={()=> setColor("red")} className="outline-none px-4 py-1
            rounded full text-white font-semibold shadow-md"
            style={{backgroundColor: 'red'}}>Red</button>
            <button onClick={()=> setColor("blue")} className="outline-none px-4 py-1
            rounded full text-white font-semibold shadow-md"
            style={{backgroundColor: 'Blue'}}>Blue</button>
            <button onClick={()=> setColor("green")} className="outline-none px-4 py-1
            rounded full text-white font-semibold shadow-md"
            style={{backgroundColor: 'green'}}>Green</button>
            <button onClick={()=> setColor("purple")} className="outline-none px-4 py-1
            rounded full text-white font-semibold shadow-md"
            style={{backgroundColor: 'purple'}}>Purple</button>
            <button onClick={()=> setColor("grey")} className="outline-none px-4 py-1
            rounded full text-white font-semibold shadow-md"
            style={{backgroundColor: 'grey'}}>grey</button>
            <button onClick={()=> setColor("pink")} className="outline-none px-4 py-1
            rounded full text-white font-semibold shadow-md"
            style={{backgroundColor: 'pink'}}>Pink</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
