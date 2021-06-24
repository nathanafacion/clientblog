import Link from 'next/link';
import * as Styled from './styles';
import {Heading} from '../Heading';
import {PostCard, PostCardProps} from '../PostCard';
import {StrapiImage} from '../../shared-typed/strapiimage';

export type PostGridProps = {
  posts?: PostCardProps[];
};

export const PostGrid = ({
  posts = []
   }: PostGridProps) => {
  return (

    <Styled.Wrapper>
    {posts.length ===0 && (
      <Styled.NotFound> Nenhum post encontrado aqui </Styled.NotFound>

    )}
      <Styled.Grid>
        {posts.length> 0 && posts.map((post) => (
          <PostCard key={`post-card-${post.id}`} {...post} />
        ))}
      </Styled.Grid>
    </Styled.Wrapper>
  );
};
