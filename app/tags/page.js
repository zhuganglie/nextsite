


import { allPosts } from "contentlayer/generated";
import Link from 'next/link';


export default function TagsPage() {
  const allTags = allPosts.reduce((tags, post) => {
    post.tags.forEach(tag => tags.add(tag))
    return tags
  }, new Set())

  return (
    <div>
      <h1>Unique Tags:</h1>
      <ul>
        {[...allTags].map(tag => (
          <li key={tag}>
            <Link href={`/tags/${tag}`}>
              {tag} ({allPosts.filter(post => post.tags.includes(tag)).length})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
