

import { Post, allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { Metadata } from "next";
import { getMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";
import { TbTag, TbArrowBack } from "react-icons/tb";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export const generateStaticParams = async () =>
  allPosts.map((post: Post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: Props): Metadata => {
  const post = allPosts.find(
    (post: Post) => post._raw.flattenedPath === params.slug
  );
  return { title: post?.title };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find(
    (post: Post) => post._raw.flattenedPath === params.slug
  );

  let MDXContent;

  if (!post) {
    return <p>Not found.</p>;
  } else {
    MDXContent = getMDXComponent(post!.body.code);
  }

  return (
    <div className="max-w-[100vw] h-full flex justify-center">
      
        <div className="xl:px-32 px-10 flex flex-col items-center">
          <p className="text-slate-500 mb-4 mt-24">
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </p>
          <h1 className="text-slate-900 text-center md:text-5xl/snug text-4xl/snug font-bold">
            {post.title}
          </h1>
          <ul className="flex gap-x-2">
          {post.tags.map((tag, idx) => (
    <li key={idx} className="list-none flex items-center gap-x-1"><TbTag /><Link href={`/tags/${tag}`}>{tag}</Link></li>
  ))}
  </ul>
          <article>
            <MDXContent />
            <hr />
        <Link href="/posts" className="mt-4 flex items-center gap-x-1"><span>All Posts</span><TbArrowBack /></Link>
          </article>
        </div>
       
      </div>
  );
};

export default PostLayout;
  

