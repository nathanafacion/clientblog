import styled, { css } from 'styled-components';

export const Wrapper = styled.div``


export const HeaderContainer = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
  `}
`;

export const ContentContainer = styled.div`
${({ theme }) => css`
    max-width:120rem;
    width: 100%;
    margin: 0 auto;
    margin-bottom: ${theme.spacings.xhuge};
  `}
`;

export const FooterContainer = styled.div`
${({ theme }) => css`
    max-width:120rem;
    width: 100%;
    margin: 0 auto;
    margin-bottom: ${theme.spacings.large};
  `}
`;

export const SearchContainer = styled.div`
  max-width:120rem;
  width: 100%;
  margin: 0 auto;
  position: relative;
`
export const MenuSearch = styled.div`
  float: left;
  display: block;
  width: 100%;
  overflow: hidden;
  background-color: #e9e9e9;
`


export const SearchInput = styled.input`
  ${({ theme }) => css`
    float: right;
    display:bock;
    padding: 1rem;
    position: relative;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: none;
    margin-right: 1rem;
    border-radius: 1rem;
    width: 20em;
    outline: none;

    @media ${theme.media.lteMedium}{
      .input[type=text] {
        float: none;
        display: block;
        text-align: left;
        width: 100%;
        margin-bottom:1rem;
        padding: 14px;
        padding-bottom:20px;
      }
      .input[type=text] {
        border: 1px solid #ccc;
      }
    }
  `}

}`

export const LinkMenuCategory = styled.a`
  ${({ theme }) => css`
    float: left;
    text-decoration: none;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.small};
    color: ${theme.colors.primary};
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0.76rem;
      left: 50%;
      width: 0;
      height: 0.2rem;
      background: ${theme.colors.secondary};
      transition: all 300ms ease-in-out;
    }

    &:hover::after {
      left: 25%;
      width: 50%;
    }
  `}
`;
