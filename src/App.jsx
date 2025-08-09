import { memo, useCallback, useState } from "react";

// use callback is used to prevent re-rendering of child which requires the function as the dependencies from the parent component.

function App() {
  const [count, setCount] = useState(0);

  const onClick = useCallback(() => {
    console.log("child clicked");
  }, []);
  
  return (
    <div>
      <Child onClick={onClick} />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me {count}
      </button>
    </div>
  );
}

const Child = memo(({ onClick }) => {
  console.log("child render");

  return (
    <div>
      <button onClick={onClick}>Button clicked</button>
    </div>
  );
});

export default App;
