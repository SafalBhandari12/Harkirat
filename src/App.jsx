import React, { useEffect, useState } from "react";
import useIsOnline from "./hooks/useIsOnline";

function App() {
  const { isOnline } = useIsOnline();
  return (
    <div>{isOnline ? <p>Hello online user</p> : <p>Hi offline user</p>}</div>
  );
}

export default App;
