import {request} from 'graphql-request';
import {SettingsStrapi} from '../shared-types/settings-strapi';
import config from '../config';
import { GRAPHQL_QUERY } from '../graphql/queries';
import { PostStrapi } from '../shared-types/post-strapi';


export type LoadPostsVariables = {
  categorySlug?: string;
  postSlug?: string;
  postSearch?: string;
  authorSlug?: string;
  tagSlug?: string;
  sort?: string;
  start?: number;
  limit?: number;
};

export type StrapiPostAndSettings = {
  settings: SettingsStrapi;
  posts: PostStrapi[];
  variables?:LoadPostsVariables;

};

export const defaultLoadPostsVariables: LoadPostsVariables = {
    sort: 'createdAt:desc',
    start:0,
    limit:9,
}

export const loadPosts = async (
  variables: LoadPostsVariables ={},
): Promise<StrapiPostAndSettings> =>{
    const data = await request(config.graphlURL, GRAPHQL_QUERY, {
        ...defaultLoadPostsVariables,
        ...variables,
    });

    return data;
};
