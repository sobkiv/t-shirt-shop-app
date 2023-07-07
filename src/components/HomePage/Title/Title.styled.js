import styled from 'styled-components';

export const TitleWrapper = styled.div`
  text-align: center;
  margin: 0 0 40px;

  h2 {
    color: ${({ theme }) => theme.mainColors.dark};
    margin: 0;
    font-size: 25px;

    @media (max-width: 660px) {
      display: flex;
      font-size: 20px;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      max-width: 400px;
      width: 100%;
      margin: 0 auto;
    }
    @media (max-width: 550px) {
      font-size: 18px;
      max-width: 250px;
      position: relative;
      right: 15px;
    }
  }
`;
