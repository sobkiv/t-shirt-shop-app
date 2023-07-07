import styled from 'styled-components';

export const FlexGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .custom-select {
    position: relative;
    height: 40px;
    max-width: 500px;
    margin: 0px 50px 30px 50px;

    @media (max-width: 675px) {
      width: 350px;
    }
  }
`;

export const TShirtCard = styled.div`
  width: 300px;
  height: 100%;
  margin: 0 15px 40px;

  .img-wrapper {
    display: flex;
    flex-direction: row;
    width: 100%;
    border-radius: 40px;
    height: 420px;
    overflow: hidden;
    border: 1px solid #ddd;

    img {
      height: 100%;
      width: 100%;
      transition: transform 0.3s ease-out;

      &:hover {
        transform: scale(1.05);
      }
    }
  }
`;
