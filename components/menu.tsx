import ListLayout from "@/layout/ListLayout"
import { allShibas } from "contentlayer/generated"

export default function Menu(props: any) {
  return (
    <div {...props}>
      <ListLayout shibas={allShibas} title={"柴犬信息"}></ListLayout>
    </div>
  )
}
