// ~/.finicky.js

const personalBrowser = "Safari";
const workBrowser = "Arc";

const personalApps = [
  "Mail"
]

const workApps = [
  "Linear",
  "Slack",
];

module.exports = {
  defaultBrowser: personalBrowser,
  options: {
    hideIcon: true,
  },
  handlers: [
    {
      // Open links from personal apps in the personal browser
      match: ({ opener }) => personalApps.includes(opener.name),
      browser: personalBrowser,
    },
    {
      // Open links from work apps in the work browser
      match: ({ opener }) => workApps.includes(opener.name),
      browser: workBrowser,
    },
    {
      // Video conferencing in the work browser
      match: [
        /^https?:\/\/meet\.google\.com\/.*$/,
        /^https?:\/\/.+web\.zoom\.us\/.*$/,
      ],
      browser: workBrowser,
    },
    {
      // Open links to Linear issues directly in the Linear desktop app
      match: /^https?:\/\/linear\.app\/.+\/issue\/.*$/,
      browser: "Linear",
    },
    {
      // Open links from Linear in the work browser
      match: ({ opener }) => workApps.includes(opener.bundleId),
      browser: workBrowser,
    },
    {
      // Open these in the work browser
      match: [/\S{3,}hiiv\.com/, /\S+beehiiv\S+/],
      browser: workBrowser,
    },
  ],
};
