import React, { FC } from "react";
import { checkInFavorites } from "../../../utils";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import {
  selectFavorites,
  selectIsLoading,
} from "../../../../components/Pages/components/Favorites/store/selector/favorites-selector";
import { useFavorites } from "../../../../components/Pages/shared/hooks/useFavorites";
import { FavoriteButton } from "./types/fav.btn.types";
import { useAppSelector } from "../../../../app/store/hooks";

const FavButton: FC<FavoriteButton> = ({ text, item }) => {
  const isLoading = useAppSelector(selectIsLoading);
  const favorites = useAppSelector(selectFavorites);
  const { onClickToFavorite } = useFavorites();
  return (
    <button
      disabled={isLoading}
      onClick={() => onClickToFavorite(item)}
      className={"card-fav-button"}
    >
      {checkInFavorites(item.id, favorites) || isLoading ? (
        <AiFillHeart />
      ) : (
        <AiOutlineHeart />
      )}
      {text}
    </button>
  );
};

export default FavButton;
