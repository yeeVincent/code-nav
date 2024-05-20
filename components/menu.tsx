import ListLayout from "@/layout/ListLayout"
import { allShibas } from "contentlayer/generated"

import { siteConfig } from "@/config/site"

export default function Menu(props: any) {
  return (
    <>
      {siteConfig.mainNav.map((navItem) => (
        <ListLayout shibas={allShibas} title={navItem.title} {...props}></ListLayout>
      ))}
    </>
  )
}
