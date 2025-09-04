import React, { use, useEffect, useState } from "react";

const useInterval = (fun, timeOut) => {
  useEffect(() => {
    const intervalFunction = setInterval(() => {
      fun();
    }, timeOut * 1000);

    return () => {
      clearInterval(intervalFunction);
    };
  }, []);
};

function App() {
  useInterval(() => {
    console.log("Hi");
  }, 5);
  return <div>App</div>;
}

export default App;
