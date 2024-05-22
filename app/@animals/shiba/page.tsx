import ContentLayout from "@/layout/ContentLayout"
import ListLayout from "@/layout/ListLayout"
import { allShibas } from "contentlayer/generated"

const Shiba = () => {
  return <ContentLayout className="" content={allShibas[0]}></ContentLayout>
}
export default Shiba
