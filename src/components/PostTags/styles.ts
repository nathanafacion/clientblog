import styled, { css } from 'styled-components';

export const Wrapper = styled.p`
	${({ theme }) => css`
			margin: ${theme.spacings.medium} 0;
			max-width: ${theme.sizes.content} auto;
			padding: 0 ${theme.spacings.medium} 0;
			color: ${theme.colors.darkText};

			span {
				margin: 0 0 0 0.5rem;
			}

			span::before{
				content: ' ';
			}

			span:after{
				content:', ';
			}

			span:last-child::after{
				content:'.';
			}

			a{
					color: ${theme.colors.darkerGray};
					text-decoration: none;
					transition: all 300ms ease-in-out;

					&:hover {
						filter: brightness(50%);
					}
			}

	`}
`;
