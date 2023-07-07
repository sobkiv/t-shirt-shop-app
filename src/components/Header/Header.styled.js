import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  text-align: center;
  margin: -40px 0 40px;
  font-weight: 700px;
  background-color: ${({ theme }) => theme.mainColors.main};
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-weight: 700;
    color: ${({ theme }) => theme.mainColors.dark};
    position: relative;
    top: 7px;
    left: 33px;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin: 0 0 15px;

    @media (max-width: 660px) {
      font-size: 35px;
      position: relative;
    }
    @media (max-width: 550px) {
      white-space: pre-wrap;
      font-size: 28px;
      left: 20px;
    }
    @media (max-width: 425px) {
      white-space: pre-wrap;
      font-size: 20px;
    }
  }

  img {
    width: 50px;
    position: relative;
    left: 30px;
    top: -1px;
    filter: invert(92%);

    @media (max-width: 660px) {
      left: 15px;
      width: 45px;
      margin-right: -20px;
    }
  }
`;
