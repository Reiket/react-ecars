import React from 'react';
import {AiOutlineShareAlt} from "react-icons/ai";
import {CopyToClipboard} from "react-copy-to-clipboard/src";
import {SellDetailsPropsType} from "../../types/sell-details.types";
import FavButton from "../../../../../../../../../../../../shared/components/FavButton/FavButton";

const SellPossibility: React.FC<SellDetailsPropsType> = ({detail}) => {
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
    return <div className="sell-details__possibility">
        <FavButton item={detail} classnames={"sell-details__item"} text={"Save"}/>
        <CopyToClipboard text={window.location.href}>
            <button onClick={onClickToShare} className="sell-details__item"><AiOutlineShareAlt/>{!copied ? "Share" : "Copied!"}</button>
        </CopyToClipboard>
    </div>
}

export default SellPossibility;