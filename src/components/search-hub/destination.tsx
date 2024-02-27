import { FloatingLabel, Form } from "react-bootstrap";

export const DestinationTitle = () => (
  <FloatingLabel className="mb-3" controlId="destinationInput" label="Where">
    <Form.Control placeholder="Search destinations" type="text" />
  </FloatingLabel>
);

const Destination = () => {
  return <div>destination</div>;
};

export default Destination;
