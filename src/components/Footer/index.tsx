import * as Styled from './styles';
import { HtmlComponent } from '../HtmlContent';

export type FooterProps = {
  html: string;
};

export const Footer = ({ html }: FooterProps) => {
  return (
    <Styled.Container>
        <HtmlComponent html={html} />
    </Styled.Container>
  );
};
