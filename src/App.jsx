import { useMemo, useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [ctvalue, setCtvalue] = useState(0);

  const intValue = parseInt(value);

  const sum = useMemo(() => {
    console.log("hello");
    return (intValue * (intValue + 1)) / 2;
  }, [value]);

  return (

    <>
      <input
        type='text'
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <p>Sum is {sum}</p>
      <button onClick={() => setCtvalue(ctvalue + 1)}>Click {ctvalue}</button>
    </>
  );
}

export default App;
