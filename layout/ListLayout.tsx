"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
// import Link from '@/components/Link'
// import Tag from '@/components/Tag'
// import siteMetadata from "@/data/siteMetadata"
import type { Shiba } from "contentlayer/generated"

// import { CoreContent } from "pliny/utils/contentlayer"
// import { formatDate } from "pliny/utils/formatDate"

interface PaginationProps {
  totalPages: number
  currentPage: number
}
interface ListLayoutProps {
  shibas: Shiba[]
  title: string
  initialDisplayShibas?: Shiba[]
  pagination?: PaginationProps
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname()
  const basePath = pathname.split("/")[1]
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="space-y-2 pb-8 pt-6 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
            Previous
          </button>
        )}
        {prevPage && (
          <Link
            href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
            rel="prev"
          >
            Previous
          </Link>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
            Next
          </button>
        )}
        {nextPage && (
          <Link href={`/${basePath}/page/${currentPage + 1}`} rel="next">
            Next
          </Link>
        )}
      </nav>
    </div>
  )
}

export default function ListLayout({
  shibas,
  title,
  initialDisplayShibas = [],
  pagination,
}: ListLayoutProps) {
  const [searchValue, setSearchValue] = useState("")
  console.log(shibas, "shibas")
  const filteredBlogPosts = shibas.filter((post) => {
    const searchContent = post.title + post.body
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  const displayPosts =
    initialDisplayShibas.length > 0 && !searchValue ? initialDisplayShibas : filteredBlogPosts

  return (
    <div className="divide-gray-200 dark:divide-gray-700 hidden lg:block ">
      <div className="space-y-1 pb-6 pt-6 pl-6 md:space-y-3">
        <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100 md:leading-14 ">
          {title}
        </h1>
      </div>
      <ul>
        {!filteredBlogPosts.length && "No posts found."}
        {displayPosts.map((post) => {
          const { date, title, url } = post
          return (
            <li key={title} className="py-1">
              <h2 className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                <div className="space-y-3 xl:col-span-3">
                  <div>
                    <h3 className="text-sm  leading-8 tracking-tight">
                      <Link href={`/${url}`} className="text-gray-900 dark:text-gray-100">
                        {title}
                      </Link>
                    </h3>
                  </div>
                </div>
              </h2>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
