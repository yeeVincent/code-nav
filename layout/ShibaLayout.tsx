import Link from "next/link"
import { Shiba, allShibas } from "contentlayer/generated"
import { compareDesc, format, parseISO } from "date-fns"
import { useMDXComponent } from "next-contentlayer2/hooks"

import { mdxButton } from "@/components/mdx"

function ShibaCard(Shiba: Shiba) {
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
export default function ShibaLayout(props: any) {
  const shibas = allShibas.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  return (
    <div {...props}>
      {shibas.map((shiba, idx) => (
        <ShibaCard key={idx} {...shiba} />
      ))}
    </div>
  )
}
