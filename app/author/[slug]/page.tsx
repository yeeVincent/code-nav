import ContentLayout from "@/layout/ContentLayout"
import { allAuthors } from "contentlayer/generated"
import { format, parseISO } from "date-fns"

export const generateStaticParams = async () =>
  allAuthors.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const decodedSlug = decodeURIComponent(params.slug)
  const post = allAuthors.find((post) => post._raw.flattenedPath === decodedSlug)
  // console.log(decodedSlug, "decodedSlug")
  if (!post) throw new Error(`Post not found for slug: ${decodedSlug}`)
  return { title: post.title }
}

const AuthorLayout = ({ params }: { params: { slug: string } }) => {
  const decodedSlug = decodeURIComponent(params.slug)
  const content = allAuthors.find((content) => content._raw.flattenedPath === decodedSlug)
  // console.log(decodedSlug, "decodedSlug")
  if (!content) throw new Error(`content not found for slug: ${decodedSlug}`)

  return (
    <div className="flex flex-row justify-center px-5 ">
      <ContentLayout className="" content={content}></ContentLayout>
    </div>
  )
}

export default AuthorLayout
