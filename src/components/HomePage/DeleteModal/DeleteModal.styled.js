import styled, { createGlobalStyle, css } from 'styled-components';
import Modal from 'react-modal';

export const GlobalStyle = createGlobalStyle`
  ${({ showModal }) =>
    showModal &&
    css`
      body {
        overflow: hidden;
      }
    `}
`;

export const ModalWrapper = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f2f2f2;
  border: 2px solid #000000;
  border-radius: 10px;
  padding: 20px;
`;

export const ModalContent = styled.div`
  width: 400px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;