import styled, { css } from 'styled-components';
import {Title as HeadingStyles} from '../../components/Heading/styles'
export const Wrapper = styled.div`
	${({ theme }) => css`
    padding-bottom: ${theme.spacings.xlarge};
    margin-bottom: ${theme.spacings.xlarge};
    border-bottom: 0.1rem solid ${theme.colors.mediumGray};
    justify-content: center;
    ${HeadingStyles}{
      margin:5rem;

			padding-top: ${theme.spacings.xlarge};
			margin-top:${theme.spacings.xxxhuge};
      margin-bottom: ${theme.spacings.medium};
      justify-content: center;
    }

  `}
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.large};
    margin: ${theme.spacings.large} 0;
    display: flex;
    justify-content: center;
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    border: none;
    padding: ${theme.spacings.small} ${theme.spacings.large};
    cursor: pointer;
    &:disabled {
      background: ${theme.colors.darkerGray};
    }
  `}
`;
