import FeaturedPosts from '../components/content-modules/featured-posts'
import LandingPageImage from '../components/content-modules/LandingPageImage'
import React from 'react'

const componentsMap = {
  ContentfulLandingPageImage: LandingPageImage,
  ContentfulLandingPageFeaturedPosts: FeaturedPosts
}
export const getLandingPageModule = (module, index) => {
  const Component = componentsMap[module.internal.type]
  if (Component) {
    return <Component data={module} key={index}/>
  }
  return null
}

export default getLandingPageModule