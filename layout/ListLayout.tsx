"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
// import Link from '@/components/Link'
// import Tag from '@/components/Tag'
// import siteMetadata from "@/data/siteMetadata"
import type { Shiba } from "contentlayer/generated"

import { cn } from "@/lib/utils"

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
  className?: string
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
  className,
}: ListLayoutProps) {
  const [searchValue, setSearchValue] = useState("")
  // console.log(shibas, "shibas")
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
          const { date, title, url } = post
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
