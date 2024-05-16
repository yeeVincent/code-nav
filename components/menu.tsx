import ListLayout from "@/layout/ListLayout"
import { Post, allPosts } from "contentlayer/generated"

export default function Menu(props: any) {
  return (
    <div {...props}>
      <ListLayout posts={allPosts} title={"柴犬信息"}></ListLayout>
    </div>
  )
}
