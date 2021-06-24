
import * as Styled from './styles';
import { Heading } from '../Heading';
import {LogoLink} from '../LogoLink';


export type HeaderProps = {
  blogName:string;
  description:string;
  logo?:string;
  showText?:boolean;
};

export const Header = ({
  blogName,
  description,
  logo,
  showText = false,

}: HeaderProps) => {
    const valueDescription = description.toUpperCase();
    return (
        <Styled.Wrapper>

          {showText && (
            <Styled.Content>
              <Heading size="huge" as="h2" colorDark={true}>
                {blogName}
              </Heading>
              <div align='right'>
                {valueDescription}
              </div>
            </Styled.Content>
          )}
        </Styled.Wrapper>
    );
  };
