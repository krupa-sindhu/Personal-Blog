const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/jatin/Projects/Personal-Blog/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/jatin/Projects/Personal-Blog/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/home/jatin/Projects/Personal-Blog/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/jatin/Projects/Personal-Blog/src/pages/index.js"))),
  "component---src-pages-tags-js": hot(preferDefault(require("/home/jatin/Projects/Personal-Blog/src/pages/tags.js"))),
  "component---src-pages-team-js": hot(preferDefault(require("/home/jatin/Projects/Personal-Blog/src/pages/team.js")))
}

