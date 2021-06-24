import {Title as HeadingStyles} from '../Heading/styles';
import styled, { css } from 'styled-components';

export const Wrapper = styled.header`
  ${({theme})=> css`
      display: flex;
      align-items: center;
      justify-content: center;
      padding-bottom: ${theme.spacings.xhuge};
      width: 100%;
      max-width: ${theme.sizes.max};
      color: ${theme.font.sizes.small};
      font-size: ${theme.font.sizes.small};
      margin: 0 auto;

      ${HeadingStyles}{
        margin: 0;
        padding:0;
      }

      @media ${theme.media.lteSmall} {
        display:flex;
        flex-flow: column wrap;

        & > $ ${HeadingStyles}{
            margin: 0 0 calc(${theme.spacings.small} -1rem);
        }
      }

  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column wrap;
    margin-left: ${theme.spacings.large};
    max-width: 48rem;

    @media ${theme.media.lteSmall}{
      margin-left:0;
    }
  `}
`;
