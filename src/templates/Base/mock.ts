import {BaseTemplateProps} from '.';

export default {
  settings:{
          blogName:'Nanaverso',
          logo: {
            url:'assets/images/social-share.jpg'
          },
          description:'O universo pelos olhos de uma garota sonhadora',
          text:'Criado pela Nana',

          menuLink:
          [
              {
                id:'link-1',
                link:'/home/1',
                newTab:false,
                text: 'My jobs',
              },
              {
                id:'link-2',
                link:'/home/2',
                newTab:false,
                text: 'About Me',
              },
              {
                id:'link-3',
                link:'/home/3',
                newTab:false,
                text: 'Services',
              },

            ]


  },
  children:'Olá mundo'

} as BaseTemplateProps;
