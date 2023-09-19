import React from "react"
import ContentLoader from "react-content-loader"

const NewsLoader = (props) => (
    <ContentLoader
        speed={2}
        width={500}
        height={431}
        viewBox="0 0 500 431"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="14" rx="8" ry="8" width="392" height="220" />
        <rect x="0" y="250" rx="8" ry="8" width="53" height="20" />
        <rect x="16" y="295" rx="8" ry="8" width="360" height="44" />
        <rect x="16" y="352" rx="8" ry="8" width="360" height="60" />
    </ContentLoader>
)

export default NewsLoader;