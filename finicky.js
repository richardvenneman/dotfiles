// ~/.finicky.js

module.exports = {
  defaultBrowser: "Safari",
  options: {
    hideIcon: true,
  },
  handlers: [
    {
      // Open google.com and *.google.com urls in Google Chrome
      match: [
        "google.com/*", // match google.com urls
        "*.google.com/*", // match google.com subdomains
      ],
      browser: "Google Chrome",
    },
    {
      // Video conferencing in Chrome
      match: [
        /^https?:\/\/meet\.google\.com\/.*$/,
        /^https?:\/\/.+web\.zoom\.us\/.*$/,
      ],
      browser: "Google Chrome",
    },
    {
      // Open links to Linear issues directly in the Linear desktop app
      match: /^https?:\/\/linear\.app\/.+\/issue\/.*$/,
      browser: "Linear",
    },
    {
      // Open these in Chrome
      match: [/\S{3,}hiiv\.com/, /\S+beehiiv\S+/],
      browser: "Google Chrome",
    },
  ],
};
