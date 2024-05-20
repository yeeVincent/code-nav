"use client"

import { useParams, useSearchParams } from "next/navigation"
import { allShibas } from "@/.contentlayer/generated"
import ShibaLayout from "@/layout/ShibaLayout"

import Menu from "@/components/menu"

export default function Shiba() {
  const FirstShibaArticle = allShibas.at(0)
  const FirstShibaArticleName = FirstShibaArticle?.title || ""
  const articleName = useSearchParams().get("articleName") || FirstShibaArticleName

  return (
    <div className="flex flex-row justify-center px-5 ">
      <Menu className="md:min-w-60 mr-5"></Menu>
      <ShibaLayout className="" articleName={articleName}></ShibaLayout>
    </div>
  )
}
