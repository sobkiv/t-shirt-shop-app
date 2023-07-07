import styled from 'styled-components';

export const CardWrapper = styled.div`
.btn-primary {
    width: 70px;
    height: 70px;
    position: fixed;
    right: 20px;
    top: 85px;
    z-index: 20;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.mainColors.main};
    border-color: ${({ theme }) => theme.mainColors.main};
}

.quantity {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 22px;
    height: 22px;
    position: fixed;
    right: 20px;
    font-size: small;
    top: 85px;
    z-index: 20;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.mainColors.dark};
    border-color: ${({ theme }) => theme.mainColors.main};
}

@media (max-width: 660px) {
    .btn-primary {
        width: 52px;
        height: 52px;
    }
}
`;
