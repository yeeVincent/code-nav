import { Params } from "next/dist/shared/lib/router/utils/route-matcher"
import Link from "next/link"
import { Shiba, allShibas } from "contentlayer/generated"
import { compareDesc, format, parseISO } from "date-fns"
import { useMDXComponent } from "next-contentlayer2/hooks"

import { mdxButton } from "@/components/mdx"

interface ILayoutType {
  articleName: Params
  className: string
}

function ShibaCard({ Shiba }: { Shiba: Shiba }) {
  const MDXContent = useMDXComponent(Shiba.body.code)
  return (
    <article className="mt-8">
      <h2 className={"ShibaLayout-title text-3xl"}>{Shiba.title}</h2>
      <time dateTime={Shiba.date} className="block text-xs text-gray-600">
        {format(parseISO(Shiba.date), "LLLL d, yyyy")}
      </time>
      {/* <div className="text-sm space-y-3" dangerouslySetInnerHTML={{ __html: post.body.html }} /> */}
      <div className="my-5">
        <MDXContent components={{ Button: mdxButton }} />
      </div>
    </article>
  )
}
export default function ShibaLayout(props: ILayoutType) {
  const { articleName = "" } = props
  const Shiba = allShibas.find((shiba) => shiba.title === articleName)

  // Shiba && console.log(convertToPinyin(Shiba?.title))
  return <div className={props.className}>{Shiba && <ShibaCard Shiba={Shiba} />}</div>
}
