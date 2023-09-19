import React from "react"
import ContentLoader from "react-content-loader"

const OfferLoader = (props) => (
    <ContentLoader
        speed={2}
        width={400}
        height={350}
        viewBox="0 0 400 350"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="396" rx="10" ry="10" width="95" height="30" />
        <rect x="169" y="396" rx="10" ry="10" width="112" height="30" />
        <rect x="0" y="21" rx="8" ry="8" width="288" height="180" />
        <rect x="0" y="208" rx="8" ry="8" width="256" height="24" />
        <rect x="0" y="238" rx="8" ry="8" width="256" height="16" />
        <rect x="0" y="290" rx="8" ry="8" width="145" height="20" />
        <rect x="220" y="290" rx="8" ry="8" width="67" height="20" />
    </ContentLoader>
)

export default OfferLoader;
