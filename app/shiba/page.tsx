"use client"

import { useParams } from "next/navigation"
import ShibaLayout from "@/layout/ShibaLayout"

import Menu from "@/components/menu"

export default function Shiba() {
  const articleName = useParams()

  // const { articleName } = router.query
  // console.log(articleName, "articleName")
  // const articleName = "柴犬信息"
  return (
    <div className="flex flex-row justify-center px-5 ">
      <Menu className="md:min-w-60 mr-5"></Menu>
      <ShibaLayout className="" articleName={articleName}></ShibaLayout>
    </div>
  )
}
