import {MenuPropsLinks} from '../components/Menu';
import {StrapiImage} from './image';

export type SettingsStrapi = {
  id: string;
  blogName: string;
  Description: string;
  logo: StrapiImage;
  menuLink: MenuPropsLinks[];
  text: string;

};
