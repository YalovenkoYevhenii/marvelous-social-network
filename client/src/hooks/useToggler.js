import { useState } from 'react';

const useToggler = () => {
  const [value, setValue] = useState(false);

  const handlerToggle = () => {
    setValue(prev => !prev);
  };

  return { value, handlerToggle };
};

export default useToggler;
