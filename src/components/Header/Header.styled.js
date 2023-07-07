import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  text-align: center;
  margin: -40px 0 40px;
  background-color: ${({ theme }) => theme.mainColors.main};
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  h1 {
    color: ${({ theme }) => theme.mainColors.dark};
    position: relative;
    top: 5px;
    left: 33px;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin: 0 0 15px;

    @media (max-width: 660px) {
      font-size: 30px;
    }
    @media (max-width: 550px) {
      white-space: pre-wrap;
      font-size: 20px;
      content: "Hello\nWorld";
    }
  }

  img {
    width: 43px;
    position: relative;
    left: 30px;
    top: -1px;
    filter: invert(92%);
    
    @media (max-width: 660px) {
      width: 35px;
    }
    @media (max-width: 550px) {
      width: 35px;
    }
  }
`;
