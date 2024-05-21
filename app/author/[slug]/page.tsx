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
  const post = allAuthors.find((post) => post._raw.flattenedPath === decodedSlug)
  // console.log(decodedSlug, "decodedSlug")
  if (!post) throw new Error(`Post not found for slug: ${decodedSlug}`)

  return (
    <article className="mx-auto max-w-xl py-8">
      <div className="mb-8 text-center">
        <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        <h1 className="text-3xl font-bold">{post.title}</h1>
      </div>
      <div
        className="[&>*:last-child]:mb-0 [&>*]:mb-3"
        dangerouslySetInnerHTML={{ __html: post.body.code }}
      />
    </article>
  )
}

export default AuthorLayout
