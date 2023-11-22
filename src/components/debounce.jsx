/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

const useDebounce = (searchText, delay) => {
  const [debouncedText, setDebouncedText] = useState(searchText);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setDebouncedText(searchText);
    }, delay);

    return () => clearTimeout(timeOutId);
  }, [searchText, delay]);

  return debouncedText;
};

export default useDebounce;
