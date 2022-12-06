// ~/.finicky.js

module.exports = {
  defaultBrowser: "Safari",
  options: {
    hideIcon: true
  },
  handlers: [
    {
      // Video conferencing in Chrome
      match: [/^https?:\/\/meet\.google\.com\/.*$/, /^https?:\/\/.+web\.zoom\.us\/.*$/],
      browser: "Google Chrome"
    },
    {
      // Open links to Linear issues directly in the Linear desktop app
      match: /^https?:\/\/linear\.app\/.+\/issue\/.*$/,
      browser: 'Linear'
    }
  ]
}
