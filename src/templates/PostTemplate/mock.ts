import {PostTemplateProps} from '.';

export default {
  settings:{
            blogName:'Nanaverso',
            logo: {
              url:'assets/images/social-share.jpg'
            },
            Description:'O universo pelos olhos de uma garota sonhadora',
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
    post: {

      id: 'Nana',
      title: 'Hello Nanaverso',
      excerpt: 'Olá mundo quero descer mas também não quero',
      cover: {
        id:'fffbbb',
        alternativeText:'Nanaverso',
        url:'/assets/images/social-share.jpg'
      },
      author: {
        id: '123456789',
        slug: 'nathana',
        displayName: 'Nathana Facion',
      },
      categories:[
        {
          id: 'asdslgyh65',
          displayName: 'Corrida',
          slug: 'corrida',
        },
        {
          id: 'asdslgyh66',
          displayName: 'Programação',
          slug: 'programacao',
        }
      ],
      createdAt: '2021-06-04T15:16:09.246+00:00',
      content: 'foi'
    }
} as PostTemplateProps;
