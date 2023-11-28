import React from 'react';
import {checkInFavorites} from "../../../../../../../../../../../../utils/checkInFavorites";
import {AiFillHeart, AiOutlineHeart, AiOutlineShareAlt} from "react-icons/ai";
import {CopyToClipboard} from "react-copy-to-clipboard/src";
import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectFavorites, selectIsLoading} from "../../../../../../../../../../../../redux/selectors/favorites-selector";
import {ItemsType} from "../../../../../../../../../../../../types/types";
import {fetchAddToFav, fetchRemoveFromFav} from "../../../../../../../../../../../../redux/reducers/favorites-reducer";
import {AppDispatch} from "../../../../../../../../../../../../redux/store";
import {SellDetailsPropsType} from "../../types/sell-details.types";

const SellPossibility: React.FC<SellDetailsPropsType> = ({itemById}) => {
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
        <button disabled={isLoading} onClick={() => onClickToFavorite(itemById)} className="sell-details__item">{checkInFavorites(itemById.id, favorites) ? <AiFillHeart /> : <AiOutlineHeart />}Save</button>
        <CopyToClipboard text={`http://localhost:3001` + pathname + search }>
            <button onClick={onClickToShare} className="sell-details__item"><AiOutlineShareAlt/>{!copied ? "Share" : "Copied!"}</button>
        </CopyToClipboard>
    </div>
}

export default SellPossibility;