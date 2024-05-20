"use client"

import { useSearchParams } from "next/navigation"
import { allAuthors } from "@/.contentlayer/generated"
import ContentLayout from "@/layout/ContentLayout"

export default function Shiba() {
  const FirstShibaArticle = allAuthors.at(0)
  const FirstShibaArticleName = FirstShibaArticle?.title || ""
  const articleName = useSearchParams().get("articleName") || FirstShibaArticleName

  return (
    <div className="flex flex-row justify-center px-5 ">
      <ContentLayout
        className=""
        articleName={articleName}
        contentList={allAuthors}
      ></ContentLayout>
    </div>
  )
}
