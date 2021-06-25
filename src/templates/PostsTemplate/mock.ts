import {PostsTemplateProps} from '.';

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
    posts: [
        {
          id:'8483483',
          title: 'Hello Nanaverso',
          excerpt: 'Olá mundo quero descer mas também não quero',
          cover: {
            id:'fffbbb',
            alternativeText:'Nanaverso',
            url:'/assets/images/social-share.jpg'
          },
        slug: 'post-nanaverso'
      },{
          id:'8483ff3',
          title: 'Hello Nanaverso 2',
          excerpt: 'fffffffffffffffOlá mundo quero dfffffescer mas também não quero',
          cover: {
            id:'fffbbb2',
            alternativeText:'Nanaverso2',
            url:'/assets/images/social-share.jpg'
          },
          slug: 'post-nanaverso'
      }]

} as PostsTemplateProps;
