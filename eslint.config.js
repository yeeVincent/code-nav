module.exports = {
  parser: "@babel/eslint-parser", // 更新为最新的解析器
  parserOptions: {
    requireConfigFile: false, // 不需要 Babel 配置文件
    ecmaVersion: 2022, // 更新 ECMAScript 版本
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true,
    },
  },
  extends: [
    "airbnb", // 保留 airbnb 风格指南
    "plugin:promise/recommended",
    "plugin:@next/next/recommended", // 添加 Next.js 的推荐规则
  ],
  settings: {
    react: {
      version: "detect", // 自动检测 React 版本
    },
  },
  env: {
    browser: true,
    node: true, // Next.js 服务端组件也可能运行在 Node 环境
  },
  plugins: ["react-hooks", "promise"],
  rules: {
    "no-undef": "error",
    "react-hooks/rules-of-hooks": "error",
    semi: ["error", "never"],
    "react/jsx-one-expression-per-line": "off",
    "react/react-in-jsx-scope": "off", // 从 React 17 开始不必在文件中导入 React
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ], // 适配 Next.js 的 Link 组件
  },
  ignorePatterns: ["node_modules/", "build/", "dist/"],
}
