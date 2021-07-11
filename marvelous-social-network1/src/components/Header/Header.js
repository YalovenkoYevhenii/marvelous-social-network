import React from 'react';
import PaginationButton from './PaginationButton';

const Header = () => {
  const [items, setItems] = useState([0, 4]);

  const styles = {
    backgroundColor: 'gray',
    height: '10vh',
  };
  const sampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
  const itemsPerPage = 4;
  const arr = [];

  const getPagesAmount = () => (Math.ceil(sampleArray.length / itemsPerPage));

  // eslint-disable-next-line consistent-return
  const addPages = () => {
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i <= getPagesAmount(); i++) {
      arr.push(i);
    }
    return arr;
  };
  addPages();
  const foo = () => {
    const elements = 4;
    const arrForRes = []
    let first = items[0];
    let second = items[1];
    arrForRes.push(first + elements)
    arrForRes.push(second + elements)
    return arrForRes
  }
  const han
  
  return (
    <div style={styles}>
      <strong>Header</strong>
      {arr.map((paginationNumber) => (
        <PaginationButton
          onClick={}
          num={paginationNumber}
          key={paginationNumber}
        />
      ))}

      {sampleArray.slice(0, 4)}

    </div>
  );
};

export default Header;
