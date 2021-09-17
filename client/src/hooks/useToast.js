import { useState } from 'react';

const useToast = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState('success');
  const [message, setMessage] = useState('');

  return {
    isOpen, type, message, setIsOpen, setType, setMessage,
  };
};

export default useToast;
