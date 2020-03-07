import React, { useState } from "react";
import { Button, Row, Col } from "reactstrap";
import { useSelector } from "react-redux";
import Offer from "./Offer";

const OffersList = () => {
  const [listNum, setListNum] = useState(0);
  const { offersYouMade } = useSelector(state => state.offers);
  const { offersYouGot } = useSelector(state => state.offers);

  const buttonColors = !listNum
    ? ["secondary", "light"]
    : ["light", "secondary"];

  return (
    <div>
      <Button
        color={buttonColors[0]}
        className="mt-2 border-secondary"
        onClick={() => setListNum(0)}
      >
        Offers You Made{" "}
      </Button>
      <Button
        color={buttonColors[1]}
        className="mt-2 ml-2 border-secondary"
        onClick={() => setListNum(1)}
      >
        Offers You Got
      </Button>

      {!listNum ? (
        <Row>
          {offersYouMade.map(offer => (
            <Col xs="12" sm="12" md="6">
              <Offer key={offer.offerId} offer={offer} listNum={listNum} />
            </Col>
          ))}
        </Row>
      ) : (
        <Row>
          {offersYouGot.map(offer => (
            <Col xs="12" sm="12" md="6">
              <Offer key={offer.offerId} offer={offer} listNum={listNum} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default OffersList;
