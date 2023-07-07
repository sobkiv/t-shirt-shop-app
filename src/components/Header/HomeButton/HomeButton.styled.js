import styled from 'styled-components';

export const HomeButtonWripper = styled.div`
	a {
    text-decoration: none;
  }
	
  div {
    position: relative;
	  right: 25px;
    color: #fff;
    background-color: ${({ theme }) => theme.mainColors.main};
    padding: 9px 15px;
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
    @media (max-width: 660px) {
      right: 20px;
      font-size: 14px;
      padding: 8px 13px;
    }
    @media (max-width: 550px) {
      right: 15px;
      font-size: 13px;
      padding: 7px 11px;
      left: -7px;
    }
  }
`;
