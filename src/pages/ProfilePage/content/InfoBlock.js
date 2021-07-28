import React from 'react';

import { useContextApp } from '../../../App/context';

import { NameBlock, StyledInfoBlock } from './styles';

const InfoBlock = () => {
  const { user: { firstName, lastName } } = useContextApp();
  return (
    <StyledInfoBlock>
      <NameBlock>
        <div>{firstName}</div>
        <div>{lastName}</div>
      </NameBlock>
      <div>г. Херсон</div>
      <div>г. Херсон</div>
    </StyledInfoBlock>
  );
};

export default InfoBlock;
