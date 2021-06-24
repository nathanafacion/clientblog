import {PostProps} from '../component/Post';
import {PostTag} from './tag';

export type PostStrapi = PostProps & {
  tags: PostTag[];
  slug: string;

};
