import { useState } from "react";

function BackgroundChanger() {
  const [color, setColor] = useState("white");
  return (
    <div className={`h-svh relative ${color}`}>
      <div className='flex items-center gap-5 absolute bottom-1 right-1/2 translate-x-1/2 pb-5 text-gray-300'>
        <button
          className='bg-red-900 p-4'
          onClick={() => setColor("bg-red-500")}
        >
          Red
        </button>
        <button
          className='bg-yellow-900 p-4'
          onClick={() => setColor("bg-yellow-500")}
        >
          Yellow
        </button>
        <button className='bg-black p-4' onClick={() => setColor("bg-black")}>
          Black
        </button>
        <button
          className='bg-purple-900 p-4'
          onClick={() => setColor("bg-purple-500")}
        >
          Purple
        </button>
        <button
          className='bg-green-900 p-4'
          onClick={() => setColor("bg-green-500")}
        >
          Green
        </button>
        <button
          className='bg-blue-900 p-4'
          onClick={() => setColor("bg-blue-500")}
        >
          Blue
        </button>
        <button className='bg-white' onClick={() => setColor("bg-white")}>
          Default
        </button>
      </div>
    </div>
  );
}

export default BackgroundChanger;
