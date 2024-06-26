import ListLayout from "@/layout/ListLayout"
import { allShibas } from "contentlayer/generated"

interface ILayout {
  children: React.ReactNode
}
const layout = ({ children }: ILayout) => {
  return (
    <div className="body-content w-full flex flex-row justify-center pl-5 md:pr-5 ">
      <ListLayout className="mr-5 " shibas={allShibas} title={"柴犬信息"}></ListLayout>
      {children}
    </div>
  )
}

export default layout
