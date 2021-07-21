import React, {
  createContext, useContext,
} from 'react';
import useFetch from '../../hooks/useFetch';

const Context = createContext(null);
const useContextPage = () => useContext(Context);
const url = 'http://localhost:3000/users';

// eslint-disable-next-line react/prop-types
const Provider = ({ children }) => {
  // const [user, setUser] = useState(null);

  const { data1 } = useFetch(url, 'GET');

  console.log(data1);

  const data = { user: 1 };
  return (
    <Context.Provider value={data}>
      {children}
    </Context.Provider>
  );
};

export default Provider;

export { Context, useContextPage, Provider };
