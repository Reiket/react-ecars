import type { FC } from "react";
import { Title } from "src/shared/components/Title/Title";
import Button from "src/shared/components/buttons/GreenButton/Button";
import { FaCheck } from "react-icons/fa";

interface Props {
  points: string[];
}

const CatalogSend: FC<Props> = ({ points }) => {
  return (
    <div className="catalog__send send-catalog">
      <div className="send-catalog__info">
        <Title
          text="Send an inquiry and our managers will offer you the best deals"
          tag={"h4"}
          classnames={"item-title_small"}
        />
        <ul className="send-catalog__list">
          {points.map((point) => (
            <li key={point} className="send-catalog__point">
              <FaCheck />
              {point}
            </li>
          ))}
        </ul>
      </div>
      <Button type={"button"} size={"small"} theme={"green"}>
        Get a quote
      </Button>
    </div>
  );
};

export default CatalogSend;
