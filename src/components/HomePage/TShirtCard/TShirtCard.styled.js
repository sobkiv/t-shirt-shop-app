import styled from "styled-components";
import { TShirtCard } from "../../styled";

export const StyledTShirtCard = styled(TShirtCard)`
  .info-wrapper {
    position: relative;
    font-size: 19px;

    margin-top: 7px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;
  }

  .button-wrapper {
    color: ${({ theme }) => theme.mainColors.dark};
    margin-right: 5px;
    margin-left: 5px;
    background-color: ${({ theme }) => theme.mainColors.main};
  }

  h1,
  p {
    display: flex;
    justify-content: center;
  }
  .btns {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #3da96d;
    a {
      text-decoration-color: #000;
      color: #3da96d;
      &:hover {
        text-decoration: none;
        color: #c6c6c6;
      }
    }
    button {
      outline: none;
      border: 1px solid #8e8e8e;
      border-radius: 15px;
      padding: 5px 20px;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

export const ButtonsWrapper = styled.div`
  text-align: center;

  button {
    color: #fff !important;
    background-color: ${({ theme }) => theme.mainColors.main};
    margin: auto;
    padding: 8px 10px;
    letter-spacing: 2px;
    font-size: 15px;
    border: none;
    outline: none;
    border-radius: 12px;
    transition: background-color 0.3s ease-out;

    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.mainColors.dark};
    }
  }
`;
