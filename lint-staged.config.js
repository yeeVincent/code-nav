function config() {
  return {
    "*.{js,jsx,ts,tsx}": ["prettier --write"],
    "*.{css,scss}": ["prettier --write"],
  }
}

module.exports = config()
