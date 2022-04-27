module.exports = {
  siteMetadata: {
    title: `Diverse Crew`,
    description: `We aim to collate and help highlight diverse talent in the film industry. Be found on this site free! We ONLY feature publicly available contact details used for business (numbers/emails to agents or self-promoting talent). We are not an agency, any contact will be direct from production company to agent/talent.`,
    author: `Joel White`,
    siteUrl: `https://www.diversecrew.com`,
    keywords: ["diverse film crew, diverse actor, diverse writer, diverse director, black actor, disabled actor, old actor, new actor, black writer, disabled writer, old writer, new writer, black director, disabled director, old director, new director"],
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Diverse Crew",
        short_name: "Diverse Crew",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
