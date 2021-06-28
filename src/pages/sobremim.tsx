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
          Sobre Mim
        </title>
      </Head>
      <OtherPagesTemplate title={Mock.default.about.title} content={Mock.default.about.content} settings={settings} />
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
  console.log('teste')
  console.log(data);
  if(!data || !data.posts || !data.posts.length){
      return {
        notFound: true,
      };
  }


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
