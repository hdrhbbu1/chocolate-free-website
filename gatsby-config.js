module.exports = {
  siteMetadata: {
    siteUrl: 'https://chocolate-free.com/',
    title: 'Chocolate Free',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '0w6gaytm0wfv',
        accessToken: 'c9414fe612e8c31f402182354c5263f9c6b1f0c611ae5597585cb78692dc2493',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-89281107-1',
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap'
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        'name': 'Chocolate-free',
        'short_name': 'ChocoFree',
        'start_url': '/',
        'background_color': '#e8e8e8',
        'icons': [
          {
            'src': '/android-chrome-192x192.png',
            'sizes': '192x192',
            'type': 'image/png'
          },
          {
            'src': '/android-chrome-512x512.png',
            'sizes': '512x512',
            'type': 'image/png'
          }
        ],
        'theme_color': '#e8e8e8',
        'display': 'standalone'
      }
    },
    'gatsby-plugin-offline',
    'gatsby-transformer-remark',
    'gatsby-plugin-sass'
  ],
}
