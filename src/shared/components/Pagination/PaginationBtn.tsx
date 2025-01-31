import type { FC } from "react";
import { cn } from "../../utils";
import { PaginationBtnProps } from "./types/pagination.types";

const PaginationBtn: FC<PaginationBtnProps> = ({
  onClick,
  isActiveButton,
  children,
  isDisabled,
}) => {
  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      className={cn("pagination__btn", {
        active: isActiveButton,
      })}
    >
      {children}
    </button>
  );
};

export default PaginationBtn;
