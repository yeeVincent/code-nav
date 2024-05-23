import { Author } from "next/dist/lib/metadata/types/metadata-types"
import { Params } from "next/dist/shared/lib/router/utils/route-matcher"
import Link from "next/link"
import { Authors, Shiba } from "contentlayer/generated"
import { format, parseISO } from "date-fns"
import { useMDXComponent } from "next-contentlayer2/hooks"

import { cn } from "@/lib/utils"
import { MdxButton, MdxImage } from "@/components/mdx"

type IContent = Shiba | Authors

interface ILayoutType {
  className: string
  content: IContent
}

function Card({ content, ...props }: { content: IContent; className: string }) {
  const MDXContent = useMDXComponent(content.body.code)
  return (
    <article
      className={cn("pr-2 mt-8  w-full shiba-content-article lg:pr-48 prose", props.className)}
    >
      <h2 className={"ShibaLayout-title text-3xl"}>{content.title}</h2>
      <time dateTime={content.date} className="block text-xs text-gray-600">
        {format(parseISO(content.date), "LLLL d, yyyy")}
      </time>
      {/* <div className="text-sm space-y-3" dangerouslySetInnerHTML={{ __html: post.body.html }} /> */}
      <div className="my-5">
        <MDXContent components={{ Button: MdxButton, Image: MdxImage }} />
      </div>
    </article>
  )
}
export default function ContentLayout(props: ILayoutType) {
  const { content } = props
  return content && <Card content={content} className={props.className} />
}
