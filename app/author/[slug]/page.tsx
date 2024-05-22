import ContentLayout from "@/layout/ContentLayout"
import { allAuthors } from "contentlayer/generated"
import { format, parseISO } from "date-fns"

export const generateStaticParams = async () =>
  allAuthors.map((content) => ({ slug: content._raw.sourceFileName.split(".mdx")[0] }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const decodedSlug = decodeURIComponent(params.slug)
  const content = allAuthors.find(
    (content) => content._raw.sourceFileName.split(".mdx")[0] === decodedSlug
  )
  // console.log(decodedSlug, "decodedSlug")
  if (!content) throw new Error(`content not found for slug: ${decodedSlug}`)
  return { title: content.title }
}

const AuthorLayout = ({ params }: { params: { slug: string } }) => {
  const decodedSlug = decodeURIComponent(params.slug)
  const content = allAuthors.find((content) => {
    console.log(
      content._raw.sourceFileName.split(".mdx")[0],
      "content._raw.sourceFileName",
      decodedSlug,
      "params.slug"
    )
    return content._raw.sourceFileName.split(".mdx")[0] === decodedSlug
  })

  if (!content) throw new Error(`content not found for slug: ${decodedSlug}`)

  return (
    <div className="flex flex-row justify-center px-5 ">
      <ContentLayout className="" content={content}></ContentLayout>
    </div>
  )
}

export default AuthorLayout
