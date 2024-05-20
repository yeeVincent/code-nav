import { defineDocumentType, makeSource } from "contentlayer2/source-files"

import type { Shiba as IShiba } from ".contentlayer/generated/types"

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
      resolve: (shiba: IShiba) => {
        return `data/shiba/${shiba._raw.flattenedPath}`
      },
    },
  },
}))

export default makeSource({ contentDirPath: "data/shiba", documentTypes: [Shiba] })
