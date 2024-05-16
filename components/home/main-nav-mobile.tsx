"use client"

import * as React from "react"

// import Link from "next/link"

// // import { NavItem } from "@/types/nav"
// import { siteConfig } from "@/config/site"
// import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Icons } from "@/components/icons"

interface MainNavProps {
  items?: unknown
}

export function MainNavMobile({ items }: MainNavProps) {
  return (
    <div className="md:hidden flex">
      <Drawer direction="left">
        <DrawerTrigger>
          <Icons.alignJustify className="" />
        </DrawerTrigger>
        <DrawerContent className="left-0 top-0 w-2/3 mt-0 rounded-l-none">
          <DrawerHeader>
            <DrawerTitle>smartluobo.cn</DrawerTitle>
            <DrawerDescription>小柴柴信息都在这</DrawerDescription>
          </DrawerHeader>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
