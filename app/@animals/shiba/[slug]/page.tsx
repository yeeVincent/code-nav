import ContentLayout from "@/layout/ContentLayout"
import ListLayout from "@/layout/ListLayout"
import { allShibas } from "contentlayer/generated"
import { format, parseISO } from "date-fns"

export const generateStaticParams = async () =>
  allShibas.map((post) => ({ slug: post._raw.sourceFileName.split(".mdx")[0] }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const decodedSlug = decodeURIComponent(params.slug)
  const post = allShibas.find((post) => {
    console.log(
      post._raw.sourceFileName.split(".mdx")[0],
      "post._raw.sourceFileName",
      decodedSlug,
      "params.slug"
    )
    return post._raw.sourceFileName.split(".mdx")[0] === decodedSlug
  })
  // console.log(params.slug, "params.slug")
  if (!post) throw new Error(`Post not found for slug: ${decodedSlug}`)
  return { title: post.title }
}

const ShibaDynamic = ({ params }: { params: { slug: string } }) => {
  const decodedSlug = decodeURIComponent(params.slug)
  const content = allShibas.find(
    (content) => content._raw.sourceFileName.split(".mdx")[0] === decodedSlug
  )
  if (!content) throw new Error(`content not found for slug: ${decodedSlug}`)

  return <ContentLayout className="" content={content}></ContentLayout>
}

export default ShibaDynamic
