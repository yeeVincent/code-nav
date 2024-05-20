"use client"

import { useState } from "react"
import Link from "next/link"
import type { Shiba } from "contentlayer/generated"

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
  ShibaCategoriesOrderMap

  const catagories = shibas.map((post) => post.categories)

  const filteredBlogPosts = shibas.filter((post) => {
    const searchContent = post.title + post.body
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  const displayPosts =
    initialDisplayShibas.length > 0 && !searchValue ? initialDisplayShibas : filteredBlogPosts

  return (
    <div className={cn(`divide-gray-200 dark:divide-gray-700 hidden lg:block `, className)}>
      <div className="space-y-1 pt-6 md:space-y-3">
        <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100 md:leading-14 ">
          {title}
        </h1>
      </div>
      <ul>
        {!filteredBlogPosts.length && "No posts found."}
        {displayPosts.map((post) => {
          const { date, title } = post
          return (
            <li key={title} className="my-3">
              <h2 className="">
                <Link
                  href={`?articleName=${title}`}
                  className="md:text-base text-sm text-gray-900 dark:text-gray-100"
                >
                  {title}
                </Link>
              </h2>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
