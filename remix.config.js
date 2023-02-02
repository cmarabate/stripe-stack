/**
 * @type {import('@remix-run/dev').AppConfig}
 */
const { flatRoutes } = require('remix-flat-routes')

module.exports = {
	cacheDirectory: './node_modules/.cache/remix',
  serverBuildTarget: "netlify",
  server:
    process.env.NETLIFY || process.env.NETLIFY_LOCAL
      ? "./server.js"
      : undefined,
	ignoredRouteFiles: ['**/*'],

	routes: async (defineRoutes) => {
		return flatRoutes('routes', defineRoutes)
	},
}
