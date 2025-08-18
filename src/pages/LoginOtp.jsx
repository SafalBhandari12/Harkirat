import { useRef, useState } from "react";
import { atom, constSelector, useRecoilValue, useSetRecoilState } from "recoil";

const givenOtpAtom = atom({
  default: false,
  key: "givenOtp",
});

function LoginOtp() {
  const givenOtp = useRecoilValue(givenOtpAtom);
  return (
    <div className='h-svh flex flex-col justify-center items-center'>
      <h1 className='text-2xl'>Login Via OTP</h1>
      {givenOtp ? <Otp /> : <Number />}
    </div>
  );
}

function Otp() {
  const inpRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  function handleChange(e, i) {
    if (e.target.value && i < inpRefs.length - 1) {
      inpRefs[i + 1].current.focus();
    }
  }
  return (
    <>
      {inpRefs.map((ref, i) => (
        <input
          ref={ref}
          key={i}
          maxLength={1}
          onChange={(e) => handleChange(e, i)}
        />
      ))}
    </>
  );
}

function Number() {
  const [number, setNumber] = useState("");
  const setGivenOtp = useSetRecoilState(givenOtpAtom);
  return (
    <div>
      <input
        type='text'
        className='border-2'
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => setGivenOtp(true)}>Submit</button>
    </div>
  );
}

export default LoginOtp;
