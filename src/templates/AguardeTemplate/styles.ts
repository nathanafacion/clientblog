import styled, { css } from 'styled-components';


export const ContentContainer = styled.div`
${({ theme }) => css`
    padding:0;
    margin:0;
    text-align: center;
    background-color: ${theme.colors.mediumGray};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height:100vh;
  `}
`;
