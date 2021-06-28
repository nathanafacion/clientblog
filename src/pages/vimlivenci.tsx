import Head from 'next/head';
import {GetStaticProps} from 'next';
import {useRouter} from 'next/dist/client/router';
import {defaultLoadPostsVariables, loadPosts, StrapiPostAndSettings} from '../api/load-posts';
import { OtherPagesTemplate } from '../templates/OtherPagesTemplate';
import * as Mock from '../templates/OtherPagesTemplate/mock';

export default function Index({ settings, variables}: StrapiPostAndSettings){
   const router = useRouter();
     return (
     <>
      <Head>
        <title>
          Vim Li Venci
        </title>
      </Head>
      <OtherPagesTemplate title={Mock.default.vimLiVenci.title} content={Mock.default.vimLiVenci.content} settings={settings} />
     </>
   );
}


export const getStaticProps: GetStaticProps = async() =>{
  let data =null;

  try {
    data = await loadPosts();

  } catch (e) {
    data = null;
  }

  if(!data || !data.posts || !data.posts.length){
      return {
        notFound: true,
      };
  }

    console.log(data.posts[0].cover);

    return {
      props: {
        posts:data.posts,
        settings: data.setting,
        variables: {
          ...defaultLoadPostsVariables,
        },
      },
      revalidate: 24*60*60,
    };

};
