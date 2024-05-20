import { ComputedFields, defineDocumentType, makeSource } from "contentlayer2/source-files"

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
    date: { type: "date", required: true },
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

export default makeSource({ contentDirPath: "data", documentTypes: [Shiba, Authors] })
