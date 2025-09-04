import React, { useEffect, useState } from "react";

const useDebounce = (inputValue, timeOut) => {
  const [text, setText] = useState(undefined);
  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      setText(inputValue);
    }, [timeOut]);
    return () => {
      clearTimeout(debounceTimeout);
    };
  }, [inputValue, timeOut]);

  return { text };
};

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const { text } = useDebounce(inputValue, 500); // 500 milliseconds debounce delay

  console.log(text);

  // Use the debouncedValue in your component logic, e.g., trigger a search API call via a useEffect

  return (
    <input
      type='text'
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder='Search...'
    />
  );
};

export default SearchBar;
