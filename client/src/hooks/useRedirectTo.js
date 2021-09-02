import { useHistory } from 'react-router-dom';

const useRedirectTo = (PATH) => {
  const history = useHistory();
  history.push(PATH);
};

export default useRedirectTo;
