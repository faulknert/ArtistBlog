const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/trent/Desktop/ArtistBlog/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/trent/Desktop/ArtistBlog/src/pages/404.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/trent/Desktop/ArtistBlog/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/trent/Desktop/ArtistBlog/src/pages/index.js")))
}

