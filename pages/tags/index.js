import { allPosts } from "contentlayer/generated";

export default function Tags({ tags }) {
  return (
    <ul>
      {tags.map((tag) => (
        <li key={tag.name}>
          {tag.name} ({tag.count})
        </li>
      ))}
    </ul>
  )
}

export async function getStaticProps() {
  const tags = {}

  allPosts.forEach((post) => {
    post.tags.forEach((tag) => {
      if (tags[tag]) {
        tags[tag] += 1
      } else {
        tags[tag] = 1
      }
    })
  })

  return {
    props: {
      tags: Object.keys(tags).map((tag) => ({
        name: tag,
        count: tags[tag],
      })),
    },
  }
}
