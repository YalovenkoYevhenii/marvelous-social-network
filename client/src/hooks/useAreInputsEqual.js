import { useState, useEffect } from 'react';

const useAreInputsEqual = () => {
  const [firstInput, setFirstInput] = useState(null);
  const [secondInput, setSecondInput] = useState(null);
  const [areEqual, setAreEqual] = useState(true);

  useEffect(() => {
    setAreEqual(false);
    if (firstInput === secondInput) setAreEqual(true);
  }, [firstInput, secondInput]);

  return {
    firstInput, setFirstInput, secondInput, setSecondInput, areEqual,
  };
};

export default useAreInputsEqual;
