import React, { memo } from 'react';
import { TitleWrapper } from './Title.styled';

const Title = ({ subtitle }) => {
  return (
    <TitleWrapper>
      <p>{subtitle}</p>
    </TitleWrapper>
  );
};

export default memo(Title);
