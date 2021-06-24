import * as Styled from './styles';
import {ArticleMeta} from '../ArticleMeta';
import {Author} from '../../shared-types/author';
import {Category} from '../../shared-types/category';
import {Heading} from '../Heading';
import {StrapiImage} from '../../shared-types/strapiimage';

export type ArticleHeaderProps = {
  id: string;
  title: string;
  excerpt: string;
  cover: StrapiImage;
  author: Author;
  categories: Category[];
  createdAt: string;
};

export const ArticleHeader = ({
  id,
  title,
  excerpt,
  cover,
  author,
  categories,
  createdAt
}: ArticleHeaderProps) => {
  return (
    <Styled.Wrapper>
      <Heading size="big"> {title} </Heading>
      <Styled.Excerpt>{excerpt} </Styled.Excerpt>
      <Styled.Cover src={cover.url} alt={title}/>
      <ArticleMeta categories={categories} author={author} createdAt={createdAt}/>
    </Styled.Wrapper>
  );
};
