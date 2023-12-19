import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="140" cy="125" r="125" /> 
    <rect x="0" y="264" rx="5" ry="5" width="280" height="27" /> 
    <rect x="0" y="317" rx="10" ry="10" width="280" height="88" /> 
    <rect x="124" y="418" rx="25" ry="25" width="156" height="45" /> 
    <rect x="0" y="427" rx="5" ry="5" width="92" height="27" />
  </ContentLoader>
)

export default Skeleton