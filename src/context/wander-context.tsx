"use client";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

export type ExpType = "stay" | "experience";

interface ContextProps {
  expType: ExpType;
  setExpType: Dispatch<SetStateAction<ExpType>>;
}

export const wanderContext = createContext<ContextProps | null>(null);

const WanderContextComponent = ({ children }: { children: ReactNode }) => {
  const [expType, setExpType] = useState<ExpType>("stay");
  return (
    <wanderContext.Provider value={{ expType, setExpType }}>
      {children}
    </wanderContext.Provider>
  );
};

export default WanderContextComponent;
