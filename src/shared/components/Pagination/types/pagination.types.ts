import { ReactNode } from "react";

export interface PaginationProps {
  currentPage: number;
  total: number;
  size: number;
  isLoading: boolean;
  onClick: (currentPage: number) => void;
}

export interface PaginationBtnProps {
  isDisabled: boolean;
  onClick: () => void;
  children: ReactNode;
  isActiveButton?: boolean;
}

export type PaginationFunction = (currentPage: number) => void;
