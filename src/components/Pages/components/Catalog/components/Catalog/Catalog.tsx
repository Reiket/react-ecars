import React, { FC } from "react";
import CatalogFilters from "./components/CatalogFilters/CatalogFilters";
import CatalogInfo from "./components/CatalogInfo";
import CatalogCards from "./components/CatalogCards";
import Section from "../../../../../../shared/components/Section/Section";
import CatalogSend from "./components/CatalogSend";
import { catalogSendPoints } from "./constants";

interface CatalogProps {
  onClick: () => void;
}

const Catalog: FC<CatalogProps> = ({ onClick }) => {
  return (
    <Section name={"catalog"}>
      <CatalogInfo />
      <CatalogFilters onClick={onClick} />
      <CatalogCards />
      <CatalogSend points={catalogSendPoints} />
    </Section>
  );
};

export default Catalog;
