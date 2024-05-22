import ListLayout from "@/layout/ListLayout"
import { allShibas } from "contentlayer/generated"

interface ILayout {
  children: React.ReactNode
}
const layout = ({ children }: ILayout) => {
  return (
    <div className="flex flex-row justify-center px-5 ">
      <ListLayout className="mr-5 md:min-w-60" shibas={allShibas} title={"柴犬信息"}></ListLayout>
      {children}
    </div>
  )
}

export default layout
