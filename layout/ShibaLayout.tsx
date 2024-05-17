import Link from "next/link"
import { Shiba, allShibas } from "contentlayer/generated"
import { compareDesc, format, parseISO } from "date-fns"
import { useMDXComponent } from "next-contentlayer2/hooks"

import { mdxButton } from "@/components/mdx"

async function ShibaCard(Shiba: Shiba) {
  const MDXContent = useMDXComponent(Shiba.body.code)
  return (
    <article className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link href={Shiba.url}>
          <div className="text-blue-700 hover:text-blue-900 dark:text-blue-400">{Shiba.title}</div>
        </Link>
      </h2>
      <time dateTime={Shiba.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(Shiba.date), "LLLL d, yyyy")}
      </time>
      {/* <div className="text-sm space-y-3" dangerouslySetInnerHTML={{ __html: post.body.html }} /> */}
      <MDXContent components={{ Button: mdxButton }} />
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
