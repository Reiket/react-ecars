import React from 'react';
import {checkInFavorites} from "../../../../../../../../../../shared/utils/checkInFavorites";
import {AiFillHeart, AiOutlineHeart, AiOutlineShareAlt} from "react-icons/ai";
import {CopyToClipboard} from "react-copy-to-clipboard/src";
import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectFavorites, selectIsLoading} from "../../../../../../../../../Favorites/store/selector/favorites-selector";
import {ItemsType} from "../../../../../../../../../../../../shared/types/types";
import {SellDetailsPropsType} from "../../types/sell-details.types";
import {AppDispatch} from "../../../../../../../../../../../../app/store/types/store.types";
import {fetchRemoveFromFav} from "../../../../../../../../../Favorites/store/thunks/fetchRemoveFromFav";
import {fetchAddToFav} from "../../../../../../../../../Favorites/store/thunks/fetchAddToFav";

const SellPossibility: React.FC<SellDetailsPropsType> = ({detail}) => {
    const {pathname, search} = useLocation()
    const dispatch: AppDispatch = useDispatch()
    const favorites = useSelector(selectFavorites)
    const isLoading = useSelector(selectIsLoading)
    const [copied, setCopied] = React.useState(false)
    const onClickToShare = () => {
        setCopied(prev => !prev)
    }
    const onClickToFavorite = (item: ItemsType) => {
        if (checkInFavorites(item.id, favorites)) {
            dispatch(fetchRemoveFromFav(item.id))
        } else {
            dispatch(fetchAddToFav(item))
        }
    };
    return <div className="sell-details__possibility">
        <button disabled={isLoading} onClick={() => onClickToFavorite(detail)} className="sell-details__item">{checkInFavorites(detail.id, favorites) ? <AiFillHeart /> : <AiOutlineHeart />}Save</button>
        <CopyToClipboard text={`http://localhost:3001` + pathname + search }>
            <button onClick={onClickToShare} className="sell-details__item"><AiOutlineShareAlt/>{!copied ? "Share" : "Copied!"}</button>
        </CopyToClipboard>
    </div>
}

export default SellPossibility;