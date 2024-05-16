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
      <Drawer>
        <DrawerTrigger>
          <Icons.alignJustify className="" />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
