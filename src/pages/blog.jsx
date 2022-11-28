import Head from 'next/head';
import MainLayout, { siteTitle } from '../layout/MainLayout';

import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({allPostsData}) {
  return (<div> 
  <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        
      </section>

      <section class="bg-white dark:bg-gray-900">
        <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">Blog </h1>
        <img class="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>
        <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2"> </div>
        
       
      </section>
      <ul class="lg:flex">
          {allPostsData.map(({ id, date, title }) => (
           <li key={id}>
  <Link href={`/posts/${id}`}>
  <div class="flex flex-col justify-between py-6 lg:mx-6">
  <a class="text-xl font-semibold text-gray-800 hover:underline dark:text-white">{title}</a>
  </div>
  </Link>
  
  <br />
  <small class="text-sm text-gray-500 dark:text-gray-300">
    <Date dateString={date} />
  </small>
</li>
          ))}
        </ul></div>
      
    
  );
}