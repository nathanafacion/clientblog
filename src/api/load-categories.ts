import {request} from 'graphql-request';
import config from '../config';
import { GRAPHQL_QUERY_CATEGORY } from '../graphql/queries';
import { Category } from '../shared-types/category';


export type LoadCategoryVariables = {
  allCategories: Category[];
};


export const loadCategories = async (): Promise<LoadCategoryVariables> =>{

  const data = await request(config.graphlURL, GRAPHQL_QUERY_CATEGORY);
  console.log(data.categories);
  return data.categories;
};
