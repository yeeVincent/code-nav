function config() {
  return {
    "*.+(js|jsx|ts|tsx)": ["eslint --fix"],
    "*.+(js|jsx|ts|tsx|json|css|md|mdx)": ["prettier --write"],
  }
}

module.exports = config()
