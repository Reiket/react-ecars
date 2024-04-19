import React from 'react';
import {IoIosLink} from "react-icons/io";
import {CopyToClipboard} from "react-copy-to-clipboard/src";
import {useCopy} from "../../../../../../../shared/hooks/useCopy";

const ShareCopy: React.FC = () => {
    const {copied, onClickToShare} = useCopy()
    return <CopyToClipboard text={window.location.href}>
        <button onClick={onClickToShare} className="card-share__link">
            <IoIosLink/>{!copied ? "Copy link" : "Copied!"}</button>
    </CopyToClipboard>
};

export default ShareCopy;