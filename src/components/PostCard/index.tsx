import Link from 'next/link';
import * as Styled from './styles';
import {Heading} from '../Heading';
import {PostProps} from '../Post';
import { StrapiImage } from '../../shared-types/image';

export type PostCardProps = {
  id: string;
  title: string;
  cover: StrapiImage;
  excerpt:string;
  slug:string;
};

export const PostCard = ({
  id,
  title,
  cover,
  excerpt,
  slug
   }: PostCardProps) => {
  return (

    <Styled.Wrapper>

      <Link href={`/post/${slug}`}>

        <a>

          <Styled.Cover src={cover[0].url || cover.url} alt={`${title}`}/>
        </a>
      </Link>

      <Heading as="h2" size="small">
        <Link href={`/post/${slug}`}>
          <a>{title}</a>
        </Link>
      </Heading>

      <Styled.Excerpt>
        {excerpt}
      </Styled.Excerpt>
    </Styled.Wrapper>
  );
};
