import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  Container
} from "reactstrap";
import classnames from "classnames";
import Offercard from "./offercard.js";
import Items from "../MyItems/UserItemList";
import OfferContainer from "./offersContainer.js";

const Example = props => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            onClick={() => {
              toggle("1");
            }}
          >
            Your Items
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            onClick={() => {
              toggle("2");
            }}
          >
            Others' Items
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row xs="2">
            <Container>
              <OfferContainer />
            </Container>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <OfferContainer />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Example;
