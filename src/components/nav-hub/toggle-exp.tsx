import { wanderContext } from "@/context/wander-context";
import { useContext } from "react";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";

const ToggleExp = () => {
  const setExpType = useContext(wanderContext)!.setExpType;
  return (
    <ToggleButtonGroup
      name="expType"
      onChange={(value) => setExpType(value)}
      type="radio"
    >
      <ToggleButton id="stay" value="stay">
        Stays
      </ToggleButton>
      <ToggleButton id="experience" value="experience">
        Experiences
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ToggleExp;
