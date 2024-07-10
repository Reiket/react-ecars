import React, { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  url: string;
  children: ReactNode;
}

const LinkWithIcon: FC<Props> = ({ url, children }) => {
  return (
    <Link to={url} className="icon-link">
      {children}
    </Link>
  );
};

export default LinkWithIcon;
