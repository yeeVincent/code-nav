import { Author } from "next/dist/lib/metadata/types/metadata-types"
import { Params } from "next/dist/shared/lib/router/utils/route-matcher"
import Link from "next/link"
import { Authors, Shiba } from "contentlayer/generated"
import { format, parseISO } from "date-fns"
import { useMDXComponent } from "next-contentlayer2/hooks"

import { mdxButton } from "@/components/mdx"

type IContent = Shiba | Authors

interface ILayoutType {
  articleName: string
  className: string
  contentList: IContent[]
}

function Card({ content }: { content: IContent }) {
  const MDXContent = useMDXComponent(content.body.code)
  return (
    <article className="mt-8">
      <h2 className={"ShibaLayout-title text-3xl"}>{content.title}</h2>
      <time dateTime={content.date} className="block text-xs text-gray-600">
        {format(parseISO(content.date), "LLLL d, yyyy")}
      </time>
      {/* <div className="text-sm space-y-3" dangerouslySetInnerHTML={{ __html: post.body.html }} /> */}
      <div className="my-5">
        <MDXContent components={{ Button: mdxButton }} />
      </div>
    </article>
  )
}
export default function ContentLayout(props: ILayoutType) {
  const { articleName = "", contentList = [] } = props
  const content = contentList.find((content) => content.title === articleName)
  console.log(articleName, "articleName")

  // Shiba && console.log(convertToPinyin(Shiba?.title))
  return <div className={props.className}>{content && <Card content={content} />}</div>
}
