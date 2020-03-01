import React, { useState } from "react";
import { Button, ButtonGroup } from "reactstrap";
import { useSelector } from "react-redux";
import Offer from "./Offer";

const OffersList = () => {
  const [listNum, setListNum] = useState(0);
  const { offersYouMade } = useSelector(state => state.offers);
  const { offersYouGot } = useSelector(state => state.offers);

  return (
    <div>
      <ButtonGroup className="mt-3">
        <Button onClick={() => setListNum(0)}>Offers You Made</Button>{" "}
        <Button onClick={() => setListNum(1)}>Offers You Got</Button>
      </ButtonGroup>
      {!listNum
        ? offersYouMade.map(offer => (
            <Offer key={offer.offerId} offer={offer} listNum={listNum} />
          ))
        : offersYouGot.map(offer => (
            <Offer key={offer.offerId} offer={offer} listNum={listNum} />
          ))}
    </div>
  );
};

export default OffersList;
