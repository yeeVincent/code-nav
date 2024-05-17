import { defineDocumentType, makeSource } from "contentlayer2/source-files"

export const Shiba = defineDocumentType(() => ({
  name: "Shiba",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (shiba: any) => {
        return `data/shiba/${shiba._raw.flattenedPath}`
      },
    },
  },
}))

export default makeSource({ contentDirPath: "data/shiba", documentTypes: [Shiba] })
