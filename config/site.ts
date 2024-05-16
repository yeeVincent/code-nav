export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "聪明萝卜的柴犬分享",
  description: "收集了一些养柴犬的经验, 包括柴犬的挑选, 喂养, 训练, 疾病等",
  mainNav: [
    {
      title: "柴犬信息",
      href: "/shiba",
    },
    {
      title: "作者信息",
      href: "/author",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
