function config() {
  return {
    "*.{js,jsx,ts,tsx}": ["next lint --fix", "prettier --write", "git add"],
    "*.{css,scss}": ["prettier --write", "git add"],
  }
}

export default config()
