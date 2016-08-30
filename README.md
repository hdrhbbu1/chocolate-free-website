# Chocolate Free Website
My wife's [Blog](http://chocolate-free.com/) using Contentful (Headless CMS) 

## Tools Used
* [Contentful](http://contentful.com) Like a CMS... without the bad bits for content management
* [Metalsmith](http://www.metalsmith.io/) An extremely simple, pluggable static site generator.
* [contentful-metalsmith plugin](https://github.com/contentful/contentful-metalsmith) A Metalsmith' plugin to generate files using content from Contentful
* [Circle CI](https://circleci.com/) for automating the build process

## Workflow

Workflow is super I configured a [webhook](https://www.contentful.com/developers/docs/concepts/webhooks/) on Contentful to trigger a build on Circle CI which will retrieve the new content, build the metalsmitch static site and push it to the server.
