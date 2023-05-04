import { defineDocumentType, makeSource } from "contentlayer/source-files";
import readingTime from "reading-time";

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: '**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    draft: { type: 'boolean', required: false },
    tags: { type: 'list', of: { type: 'string' }, required: true },
  },
  computedFields,
}));

const computedFields = {
  readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
  wordCount: {
    type: 'number',
    resolve: (doc) => doc.body.raw.split(/\s+/gu).length,
  },
  url: {
    type: 'string',
    resolve: (posts) => `/posts/${posts._raw.flattenedPath}`,
  },
};

const contentLayerConfig = makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
});

export default contentLayerConfig;