import React from "react"
import ContentLoader from "react-content-loader"

const CommentLoader: React.FC = (props) => (
    <ContentLoader
        speed={2}
        width={392}
        height={344}
        viewBox="0 0 392 344"
        backgroundColor="#e0dfdf"
        foregroundColor="#c9c9c9"
        {...props}
    >
        <rect x="0" y="396" rx="10" ry="10" width="95" height="30" />
        <rect x="169" y="396" rx="10" ry="10" width="112" height="30" />
        <circle cx="20" cy="20" r="20" />
        <rect x="53" y="0" rx="8" ry="8" width="120" height="20" />
        <rect x="53" y="26" rx="8" ry="8" width="120" height="20" />
        <rect x="240" y="15" rx="8" ry="8" width="88" height="16" />
        <rect x="0" y="64" rx="10" ry="10" width="328" height="216" />
    </ContentLoader>
)

export default CommentLoader;
