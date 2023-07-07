import styled from 'styled-components';

export const TitleWrapper = styled.div`
  text-align: center;
  margin: 0 0 40px;

  h1 {
    color: ${({ theme }) => theme.mainColors.main};
    letter-spacing: 3px;
    text-transform: uppercase;
    margin: 0 0 15px;
  }

  p {
    color: ${({ theme }) => theme.mainColors.dark};
    font-weight: bolder;
    margin: 0;
  }
`;
