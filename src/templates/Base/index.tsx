import React,{useEffect,useState} from 'react';
import { Footer } from '../../components/Footer';
import { GoTop } from '../../components/GoTop';
import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import { SettingsStrapi } from '../../shared-types/settings-strapi';
import { Category } from '../../shared-types/category';
import * as Styled from './styles';
import { useRouter} from 'next/dist/client/router';
import {loadCategories} from '../../api/load-categories';
import Link from 'next/link';

export type BaseTemplateProps = {
  settings: SettingsStrapi;
  children: React.ReactNode;
};

export const BaseTemplate = ( { settings, children } : BaseTemplateProps) => {
  const router = useRouter();
  const [stateCategories, setStateCategories] = useState([]);
  const site = router.pathname;


  return (
    <Styled.Wrapper>
      <Menu links={settings.menuLink}
          blogName={settings.blogName}
          logo={settings.logo[0].url}
      />
     <Styled.HeaderContainer>
        <Header
        blogName = {settings.blogName}
        description={settings.description}
        logo ={settings.logo[0].url}
        showText={true}
        />

        <Styled.MenuSearch>
          <Styled.SearchContainer>
                <div>
                  <Link href={{pathname: "/"}}>
                    <Styled.LinkMenuCategory> Todas as Categorias </Styled.LinkMenuCategory>
                   </Link>
                </div>
                <div>
                  <Link href={{pathname: "/category", query: { slug: 'desenvolvimento'}}} as={`/category/desenvolvimento`}>
                    <Styled.LinkMenuCategory> Programação </Styled.LinkMenuCategory>
                   </Link>
                </div>
                <div>
                  <Link href={{pathname: "/category", query: { slug: 'momentos'}}} as={`/category/momentos`}>
                    <Styled.LinkMenuCategory> Momentos </Styled.LinkMenuCategory>
                   </Link>
                </div>
                <div>
                  <Link href={{pathname: "/category", query: { slug: 'momentos'}}} as={`/category/entretenimento`}>
                    <Styled.LinkMenuCategory> Entretenimento </Styled.LinkMenuCategory>
                   </Link>
                </div>
              <form action="/search/" method="GET">
                <Styled.SearchInput type="search" placeholder="Buscar por posts..."
                  name="q"
                  defaultValue={router.query.q}
                />
              </form>
           </Styled.SearchContainer>
        </Styled.MenuSearch>
     </Styled.HeaderContainer>

     <Styled.ContentContainer>

     {children} </Styled.ContentContainer>

     <Styled.FooterContainer>
        <Footer html={settings.text}/>
     </Styled.FooterContainer>

    <GoTop />
    </Styled.Wrapper>

  );

}
