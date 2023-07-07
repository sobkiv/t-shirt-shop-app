import React, { memo } from 'react';
import { TitleWrapper } from './Title.styled';

const Title = ({ subtitle }) => {
  return (
    <TitleWrapper>
      <h2>{subtitle}</h2>
    </TitleWrapper>
  );
};

export default memo(Title);
