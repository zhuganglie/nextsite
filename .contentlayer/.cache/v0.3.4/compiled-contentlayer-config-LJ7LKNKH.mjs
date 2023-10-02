// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import readingTime from "reading-time";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    draft: { type: "boolean", required: false },
    tags: { type: "list", of: { type: "string" }, required: true }
  },
  computedFields
}));
var computedFields = {
  readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
  wordCount: {
    type: "number",
    resolve: (doc) => doc.body.raw.split(/\s+/gu).length
  },
  url: {
    type: "string",
    resolve: (posts) => `/posts/${posts._raw.flattenedPath}`
  }
};
var contentLayerConfig = makeSource({
  contentDirPath: "posts",
  documentTypes: [Post]
});
var contentlayer_config_default = contentLayerConfig;
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-LJ7LKNKH.mjs.map
