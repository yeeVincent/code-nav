import ListLayout from "@/layout/ListLayout"
import { allShibas } from "contentlayer/generated"

export default function Menu(props: any) {
  return (
    <>
      <ListLayout shibas={allShibas} title={"柴犬信息"} {...props}></ListLayout>
    </>
  )
}
