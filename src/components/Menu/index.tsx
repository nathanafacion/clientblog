import * as Styled from './styles';
import {LogoLink} from '../LogoLink';
import {MenuLink} from '../MenuLink';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import React, {useState} from 'react';
import { useRouter } from 'next/dist/client/router';
import { Heading } from '../Heading';

export type MenuPropsLinks ={
  id: string;
  link: string;
  newTab: boolean;
  text: string;
}

export type MenuProps = {
  links: MenuPropsLinks[];
  blogName: String;
  logo: string;
};

export const Menu = ({ links=[], blogName, logo }: MenuProps) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const handleOpenCloseMenu= (event: React.MouseEvent) => {
    event.preventDefault();
    setMenuVisible((v)=>!v);
  };

  const router = useRouter();
  return (
    <>
      <Styled.OpenClose  menuVisible={menuVisible} onClick={handleOpenCloseMenu} href="#" aria-label="Open or close menu" title="Open or close menu">

        {menuVisible && <CloseIcon aria-label="Close menu" />}
        {!menuVisible && <MenuIcon aria-label="Open menu"/>}
      </Styled.OpenClose>
      <Styled.Wrapper menuVisible={menuVisible} aria-hidden={!menuVisible}>
        <Styled.Nav>
          <Styled.Logo>
            <LogoLink link="/" text={blogName} srcImg={logo}/>
          </Styled.Logo>

          <Heading size="small" as="h2" colorDark={false}>
             {'Menu'}
           </Heading>

          {
            links.map((link) => (
              <MenuLink key={link.id} link={link.link} newTab={link.newTab}>
                {link.text}
              </MenuLink>
          ))}
        </Styled.Nav>
      </Styled.Wrapper>
    </>
  );
};
