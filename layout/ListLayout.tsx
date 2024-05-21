import { useState } from "react"
import Link from "next/link"
import type { Shiba } from "contentlayer/generated"

import { ShibaCategoriesNameEnum, ShibaCategoriesUnionEnum } from "@/types/shiba"
import { ShibaCategoriesOrderMap } from "@/lib/constant"
import { cn } from "@/lib/utils"

interface PaginationProps {
  totalPages: number
  currentPage: number
}
interface ListLayoutProps {
  shibas: Shiba[]
  title: string
  initialDisplayShibas?: Shiba[]
  pagination?: PaginationProps
  className?: string
}

export default function ListLayout({
  shibas,
  title,
  initialDisplayShibas = [],
  className,
}: ListLayoutProps) {
  const [searchValue, setSearchValue] = useState("")

  const categoriesMapTemple = shibas.reduce((acc, current) => {
    if (!acc.has(current.categories)) {
      acc.set(current.categories, [current])
    } else {
      acc.get(current.categories)!.push(current)
    }
    return acc
  }, new Map<ShibaCategoriesUnionEnum, Shiba[]>())
  const categoriesArray = Array.from(categoriesMapTemple.entries()).map(([key, value]) => ({
    category: key,
    items: value,
  }))

  console.log(categoriesArray, "categories", ShibaCategoriesNameEnum["dailyRoutine"])
  const filteredBlogPosts = shibas.filter((post) => {
    const searchContent = post.title + post.body
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  const displayPosts = filteredBlogPosts
  // displayPosts = initialDisplayShibas.length > 0 && !searchValue ? initialDisplayShibas : filteredBlogPosts

  return (
    <div className={cn(`hidden divide-gray-200 dark:divide-gray-700 lg:block `, className)}>
      <div className="space-y-1 pt-6 md:space-y-3">
        <h1 className="md:leading-14 text-xl font-bold text-gray-900 dark:text-gray-100 ">
          {title}
        </h1>
      </div>
      <ul>
        {!filteredBlogPosts.length && "No posts found."}
        {categoriesArray.map(({ category, items }, index) => (
          <div key={index}>
            <div>{ShibaCategoriesNameEnum[category]}</div>
            <div>
              {items.map((post) => {
                const { date, title } = post
                return (
                  <li key={title} className="my-3">
                    <h2 className="">
                      <Link
                        href={`?articleName=${title}`}
                        className="text-sm text-gray-900 dark:text-gray-100 md:text-base"
                      >
                        {title}
                      </Link>
                    </h2>
                  </li>
                )
              })}
            </div>
          </div>
        ))}
      </ul>
    </div>
  )
}
