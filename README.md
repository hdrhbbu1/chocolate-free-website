# Chocolate Free Website
My wife's [Blog](http://chocolate-free.com/) using Contentful (Headless CMS) 

## Tools Used
* [Contentful](http://contentful.com) a content unfrastructure 
* [Gatsby](https://www.gatsbyjs.org) a blazing fast static site generator for React 
* [gatsby-source-contentful](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-contentful) Source plugin for pulling content types, entries, and assets into Gatsby from Contentful spaces
* [Circle CI](https://circleci.com/) for automating the build process

## Workflow

Workflow is super I configured a [webhook](https://www.contentful.com/developers/docs/concepts/webhooks/) on Contentful to trigger a build on Circle CI which will retrieve the new content, build the metalsmitch static site and push it to the server.
