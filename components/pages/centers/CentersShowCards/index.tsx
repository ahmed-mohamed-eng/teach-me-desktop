import Card, { CardProps } from "./Card";

import { v4 as uuid4 } from "uuid";

export interface CentersShowCardsProps {
  cardsInfo?: CardProps[];
}

const CentersShowCards = (props: CentersShowCardsProps) => {
  return (
    <section className="w-full p-3 flex flex-col items-start justify-start space-y-3">
      {props?.cardsInfo?.map((card) => (
        <Card key={uuid4()} {...card} />
      ))}
    </section>
  );
};

export default CentersShowCards;
