import type { GatsbyConfig } from 'gatsby';

const title = "Rocco's E-books | Buy online | Publishing solutions";
const shortTitle = "Rocco's E-books";
const description =
  'Buy online e-books | Rocco offers also self-publishing solutions';
const siteUrl = 'https://ebooks.rocco.me';
const defaultLang = 'en';

const config: GatsbyConfig = {
  siteMetadata: {
    title,
    siteUrl,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'G-S2MLDBMJ9K', // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: 'OPT_CONTAINER_ID',
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ['/preview/**', '/do-not-track/me/too/'],
          // Defaults to https://www.googletagmanager.com
          // origin: 'YOUR_SELF_HOSTED_ORIGIN',
          // Delays processing pageview events on route update (in milliseconds)
          delayOnRouteUpdate: 0,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Shadows Into Light',
          // 'source sans pro\:300,400,400i,700', // you can also specify font weights and styles
        ],
        display: 'swap',
      },
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: title,
        short_name: shortTitle,
        description: description,
        lang: defaultLang,
        display: 'standalone',
        icon: 'src/images/icon.png',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#fff',
        localize: [
          {
            start_url: '/de/',
            lang: 'de',
            name: 'Die coole Anwendung',
            short_name: 'Coole Anwendung',
            description:
              'Die Anwendung macht coole Dinge und macht Ihr Leben besser.',
          },
        ],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'locale',
        path: `${__dirname}/i18n`,
      },
      __key: 'locale',
    },
    {
      resolve: 'gatsby-plugin-react-i18next',
      options: {
        localeJsonSourceName: 'locale', // name given to 'gatsby-source-filesystem' plugin.
        languages: ['en', 'es'],
        defaultLanguage: 'en',
        siteUrl,
        // if you are using trailingSlash gatsby config include it here, as well (the default is 'always')
        trailingSlash: 'always',
        // you can pass any i18next options
        i18nextOptions: {
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false,
        },
        // pages: [
        //   {
        //     matchPath: '/:lang?/:uid',
        //     getLanguageFromPath: true,
        //     excludeLanguages: []
        //   },
        //   {
        //     matchPath: '/preview',
        //     languages: ['en']
        //   }
        // ]
      },
    },
    // {
    //   resolve: 'gatsby-plugin-prettier-eslint',
    //   options: {
    //     prettier: {
    //       patterns: [
    //         // the pattern "**/*.{js,jsx,ts,tsx}" is not used because we will rely on `eslint --fix`
    //         '**/*.{css,scss,less}',
    //         '**/*.{json,json5}',
    //         '**/*.{graphql}',
    //         '**/*.{md,mdx}',
    //         '**/*.{html}',
    //         '**/*.{yaml,yml}',
    //       ],
    //     },
    //     eslint: {
    //       patterns: '**/*.{js,jsx,ts,tsx}',
    //       customOptions: {
    //         fix: true,
    //         cache: true,
    //       },
    //     },
    //   },
    // },
  ],
};

export default config;
