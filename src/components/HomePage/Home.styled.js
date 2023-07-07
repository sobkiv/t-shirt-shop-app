import styled from 'styled-components';

export const SearchInput = styled.input`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  width: 250px;
  margin: 30px auto;
  outline: none;
  padding: 13px 15px;
  border: 1px solid #dbdbdb;
  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);
  font-size: 14px;
  border-radius: 12px;
  color: #8d8d8d;

  &::placeholder {
    font-weight: 300;
    color: #8d8d8d;
  }
`;

export const SearchButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 35px;

  button {
    color: #fff;
    background-color: ${({ theme }) => theme.mainColors.main};
    margin: auto;
    padding: 10px 50px;
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
