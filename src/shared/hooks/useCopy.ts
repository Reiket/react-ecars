import React from "react";

export const useCopy = () => {
    const [copied, setCopied] = React.useState(false)
    React.useEffect(() => {
        if (copied) {
            const copyTimeOut = setTimeout(() => {
                setCopied(false)
            }, 5000)
            return () => clearTimeout(copyTimeOut)
        }
    }, [copied])
    const onClickToShare = () => {
        setCopied(prev => !prev)
    }
    return {copied, onClickToShare}
}