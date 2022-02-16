module.exports = {
  siteMetadata: {
    title: `Diverse Pool.`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
	{
		resolve: `gatsby-source-datocms`,
		options: {
		  // You can find your read-only API token under the Settings > API tokens
		  // section of your administrative area. Make sure to grant both CDA and CMA permissions.
		  apiToken: `28640fc4cb3d5d9d63a185f7ad3233`,

		  // The project environment to read from. Defaults to the primary environment:
		  environment: `main`,

		  // If you are working on development/staging environment, you might want to
		  // preview the latest version of records instead of the published one:
		  previewMode: false,

		  // Disable automatic reloading of content when some change occurs on DatoCMS:
		  disableLiveReload: false,

		  // Custom API base URL (most don't need this)
		  // apiUrl: 'https://site-api.datocms.com',

		  // Setup locale fallbacks
		  // In this example, if some field value is missing in Italian, fall back to English
		  localeFallbacks: {
			it: ['en'],
		  },
		},
	},
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
