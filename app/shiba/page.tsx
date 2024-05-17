import ShibaLayout from "@/layout/ShibaLayout"

import Menu from "@/components/menu"

export default function Shiba() {
  return (
    <div className="flex flex-row justify-center px-5 ">
      <Menu className=""></Menu>
      <ShibaLayout className=""></ShibaLayout>
    </div>
  )
}
