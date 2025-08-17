import { useState } from "react";

function ParaGenerator() {
  const [para, setPara] = useState("");
  const [lenPara, setLenPara] = useState("");

  return (
    <div className='px-3 py-2 flex gap-2'>
      <input
        type='text'
        className='border-gray-500 border-2'
        value={lenPara}
        onChange={(e) => setLenPara(e.target.value)}
      />
      <button
        onClick={() => {
          const lenPa = parseInt(lenPara);
          console.log(lenPa);
          let rePara = "";
          for (let index = 0; index < lenPa; index++) {
            rePara += "word ";
          }
          setPara(rePara);
        }}
      >
        Generate
      </button>
      {para !== "" && <div>{para}</div>}
    </div>
  );
}
export default ParaGenerator;
