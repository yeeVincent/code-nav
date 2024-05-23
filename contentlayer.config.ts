import { ComputedFields, defineDocumentType, makeSource } from "contentlayer2/source-files"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeHighlight from "rehype-highlight"
import rehypeSlug from "rehype-slug"
import remarkEmoji from "remark-emoji"
import remarkToc from "remark-toc"

import { ShibaCategoriesEnum } from "./types/shiba"

const computedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath,
  },
  filePath: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFilePath,
  },
}
export const Shiba = defineDocumentType(() => ({
  name: "Shiba",
  filePathPattern: `shiba/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    categories: { type: "enum", required: true, options: Object.values(ShibaCategoriesEnum) },
    tag: { type: "list", default: [], of: { type: "string" } },
  },
  computedFields,
}))

export const Authors = defineDocumentType(() => ({
  name: "Authors",
  filePathPattern: "author/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: "data",
  documentTypes: [Shiba, Authors],
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "wrap" }],
      remarkToc,
      remarkEmoji,
    ],
  },
})
