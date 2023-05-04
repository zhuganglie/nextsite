import { allPosts } from "contentlayer/generated";
import Layout from '@/components/layout';
import Link from 'next/link';


export default function Tag({ allPosts, tag }) {
  return (
    <Layout>
      <h1>Posts tagged with {tag}</h1>
      <ul>
        {allPosts.map((post) => (
          <li key={post.url}>
            <Link href={`/${post.url}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export async function getStaticPaths() {
  const tags = [...new Set(allPosts.flatMap((post) => post.tags))];
  const paths = tags.map((tag) => ({
    params: { slug: tag },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {

  const filteredPosts = allPosts.filter((post) => post.tags.includes(params.slug));
  return {
    props: {
      allPosts: filteredPosts,
      tag: params.slug,
    },
  };
}

