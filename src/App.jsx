import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";
import { useMemo } from "react";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}

function Count() {
  console.log("Re-render");
  return (
    <div>
      <CountRenderer />
      <Buttons />
      <IsEven />
    </div>
  );
}

function IsEven() {
  const isEven = useRecoilValue(evenSelector);
  return <>{isEven ? <div>It is even</div> : <div></div>}</>;
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>{count}</div>;
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => {
            return count + 1;
          });
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount((count) => {
            return count - 1;
          });
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
