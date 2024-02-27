"use client";
import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import CheckIn, { CheckInTitle } from "./check-in";
import CheckOut, { CheckOutTitle } from "./check-out";
import Destination, { DestinationTitle } from "./destination";
import Guests, { GuestTitle } from "./guests";

type KeyType = "destination" | "checkIn" | "checkOut" | "guests";

const SearchPanel = () => {
  const [key, setKey] = useState<KeyType>("destination");
  return (
    <Tabs
      activeKey={key}
      className="mb-3"
      id="searchPanel"
      onSelect={(k) => setKey(k as KeyType)}
    >
      <Tab eventKey="destination" title={<DestinationTitle />}>
        <Destination />
      </Tab>
      <Tab eventKey="checkIn" title={<CheckInTitle />}>
        <CheckIn />
      </Tab>
      <Tab eventKey="checkOut" title={<CheckOutTitle />}>
        <CheckOut />
      </Tab>
      <Tab eventKey="guests" title={<GuestTitle />}>
        <Guests />
      </Tab>
    </Tabs>
  );
};

export default SearchPanel;
