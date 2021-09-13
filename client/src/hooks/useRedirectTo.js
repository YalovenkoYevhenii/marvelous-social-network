import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const useRedirectTo = () => {
  const [path, setPath] = useState(null);
  const history = useHistory();
  if (path) history.push(path);

  return setPath;
};

export default useRedirectTo;
