import React, { useEffect, useState } from "react";

function useGetMouseLocation() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const setMousePointer = (value) =>
    setPointer({ x: value.screenX, y: value.screenY });

  useEffect(() => {
    window.addEventListener("mousemove", setMousePointer);

    return () => {
      removeEventListener("mousemove", setMousePointer);
    };
  }, []);
  console.log(pointer);

  return { pointer };
}

function App() {
  const { pointer } = useGetMouseLocation();
  console.log(pointer);
  return (
    <div>
      <p>X-postion: {pointer.x} </p>
      <p>Y-position: {pointer.y} </p>
    </div>
  );
}

export default App;
